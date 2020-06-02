import React from "react";
import classes from "./PersonList.module.css";
import PersonCard from "../PersonCard/PersonCard";

const PersonList = () => {
  const persons = [
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 0,
      isOnline: false,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 3,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 4,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 0,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 11,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 3,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 3,
      isOnline: true,
    },
    {
      name: "Ikromov Dilshod Safarovich",
      address: "Toshkent shahri Olmazor tumani",
      notifications: 3,
      isOnline: false,
    },
  ];
  return (
    <div className={classes.personList}>
      {persons.map((person, idx) => {
        return <PersonCard key={`${person.name + idx}`} person={person} />;
      })}
    </div>
  );
};

export default PersonList;
