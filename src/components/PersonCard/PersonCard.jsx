import React from "react";
import classes from "./PersonCard.module.css";
import BadgeAvatar from "../Avatar/BadgeAvatar";
import Badge from "../Badge/Badge";
import MicIcon from "@material-ui/icons/Mic";

const PersonCard = ({ person: { name, address, isOnline, notifications } }) => {
  return (
    <div className={classes.personCard}>
      <BadgeAvatar isOnline={isOnline} />
      <div className={classes.info}>
        <p className={classes.text}>{name}</p>
        <span className={classes.text}>{address}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.time}>
          <p>09:41 PM</p>
        </div>
        <div className={classes.notifications}>
          {notifications ? <Badge>{notifications}</Badge> : null}
          <MicIcon className={classes.micIcon} />
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
