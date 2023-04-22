import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
// import AuthContext from "../context/auth-context";

const MainHeader = () => {
  // const ctx = React.useContext(AuthContext);

  return (
    <header className={classes["main-header"]}>
      <h1>V App</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
