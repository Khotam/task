import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "../Avatar/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  action: {
    cursor: "pointer",
    marginLeft: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jumaniyozov Umidbek Dilshod o'g'li
          </Typography>
          <div className={classes.actions}>
            <ImageAvatars />
            <NotificationsIcon fontSize="large" className={classes.action} />
            <ExitToAppIcon fontSize="large" className={classes.action} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
