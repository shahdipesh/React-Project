import React from "react";
import classes from './layout.css';
import Toolbar from '../Layout/Toolbar/toolbar'

const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar></Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
