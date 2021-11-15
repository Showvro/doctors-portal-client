import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#3BE4D7" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "start" }}
          >
            Doctors Portal
          </Typography>
          <NavLink to="/appoinment" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                color: "white",
              }}
            >
              Appoinment
            </Button>
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                  }}
                >
                  Dashboard
                </Button>
              </NavLink>
              <Button
                color="inherit"
                sx={{
                  color: "white",
                }}
                onClick={logOut}
              >
                LogOut
              </Button>
            </Box>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  color: "white",
                }}
              >
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
