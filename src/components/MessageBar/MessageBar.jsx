import React from "react";
import classes from "./MessageBar.module.css";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cursor: {
    cursor: "pointer",
  },
}));

const MessageBar = () => {
  const materialClasses = useStyles();
  return (
    <div className={classes.messageBar}>
      <AttachFileIcon fontSize="large" className={materialClasses.cursor} />
      <input
        type="text"
        placeholder="Message"
        autoFocus
        className={classes.inputField}
      />
      <SendIcon fontSize="large" className={materialClasses.cursor} />
    </div>
  );
};

export default MessageBar;
