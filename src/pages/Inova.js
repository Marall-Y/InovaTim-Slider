import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import useStyles from "./Style";

const Inova = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <Content />
    </div>
  );
};

export default Inova;
