import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <img
        src={"https://flexgroup.nz/wp-content/uploads/2018/05/dummy-image.jpg"}
        alt="person"
      />
      <p className={classes.name}>Jumaniyozov Umidbek Dilshod o'g'li</p>
      <span className={classes.address}>Toshkent shahar Olmazor tumani</span>
      <span className={classes.address}>"Abdulla Qodiriy" mahallasi</span>
    </div>
  );
};

export default Hero;
