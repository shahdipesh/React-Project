import React from "react";
import classes from './layout.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar,Sidebar,Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
