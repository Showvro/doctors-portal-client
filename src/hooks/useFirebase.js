import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//initialize firebase app
initializeFirebase();

//main function
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const newUser = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = "/";
        history.replace(destination);
        const newUser = { email, displayName: name };
        setUser(newUser);
        //saved user to the database
        saveUser(email, name, "post");
        setAuthError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const googleSignIn = (history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        //saved user to the database
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        const destination = "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
    });
    setIsLoading(false);

    return () => unsubscribe;
  }, []);

  const logIn = (email, password, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const destination = location?.state?.from || "/";
        const destination = "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:9999/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`http://localhost:9999/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    newUser,
    googleSignIn,
    logIn,
    logOut,
  };
};

export default useFirebase;
