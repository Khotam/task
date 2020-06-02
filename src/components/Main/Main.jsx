import React from "react";
import classes from "./Main.module.css";
import Header from "../Header/Header";
import MessageBar from "../MessageBar/MessageBar";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Hero />
      <MessageBar />
    </div>
  );
};

export default Main;
