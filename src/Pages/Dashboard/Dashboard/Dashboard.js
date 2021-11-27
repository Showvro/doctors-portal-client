import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  BookmarkAdd,
  CalendarViewDaySharp,
  DashboardCustomizeSharp,
  DateRangeRounded,
  DocumentScannerRounded,
  Power,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddDoctor from "../AddDoctor/AddDoctor";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Payment from "../Payment/Payment";

const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        background: "linear-gradient(to top bottom, #17D2BA 0%, #11D0E2 100%)",
      }}
    >
      <Toolbar />
      <Link
        to="/appoinment"
        style={{ textDecoration: "none", color: "#3BE4D7" }}
      >
        <Button color="inherit">
          <DateRangeRounded sx={{ marginRight: "13px" }} />
          Appoinment
        </Button>
      </Link>
      <Link to={`${url}`} style={{ textDecoration: "none", color: "#3BE4D7" }}>
        <Button color="inherit">
          {" "}
          <BookmarkAdd sx={{ marginRight: "12px" }} />
          Dashboard
        </Button>
      </Link>
      {admin && (
        <Box>
          <Link
            to={`${url}/makeadmin`}
            style={{ textDecoration: "none", color: "#3BE4D7" }}
          >
            <Button color="inherit">
              {" "}
              <Power sx={{ marginRight: "13px" }} />
              Make Admin
            </Button>
          </Link>
          <Link
            to={`${url}/adddoctor`}
            style={{ textDecoration: "none", color: "#3BE4D7" }}
          >
            <Button color="inherit">
              <DocumentScannerRounded sx={{ marginRight: "13px" }} /> Add Doctor
            </Button>
          </Link>
        </Box>
      )}
      <List>
        {[
          "Dashboard",
          "Appointment",
          "Patients",
          "Prescriptions",
          "setting",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <DashboardCustomizeSharp />
              ) : (
                <CalendarViewDaySharp />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "transparent",
          color: "#3BE4D7",
          boxShadow: 0,
          textTransform: "uppercase",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            style={{ fontWeight: 500 }}
          >
            Appointments
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/payment/:appoinmentId`}>
            <Payment />
          </Route>
          <AdminRoute path={`${path}/adddoctor`}>
            <AddDoctor />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
