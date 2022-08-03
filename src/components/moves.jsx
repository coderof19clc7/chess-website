import { makeStyles } from "@mui/styles";
// import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  container : {
    position: "relative",
    display: "inline-block",
    width: "140px",
    height: "100vh",
    backgroundColor: "#333",
    overflow: "auto",
  },
  even: {
    padding: "0 20px 0",
    height: "30px",
    backgroundColor: "#666",
  },
  odd: {
    padding: "0 20px 0",
    height: "30px",
    backgroundColor: "#555",
  },
}));
const Moves = () => {
  const classes = useStyles();
  // const [activeNav, setActiveNav] = useState(false);
  // const toggleNav = () => {
  //   setActiveNav(!activeNav);
  // };
  const toggleTheme = () => {
    const root = document.querySelector(':root');
    if (root.style.getPropertyValue("--theme") === "dark") {
      root.style.setProperty("theme", "light");
      //...
    } else {
      root.style.setProperty("theme", "dark");
      //...
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.even}>e4</div>
      <div className={classes.odd}>d5</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
      <div className={classes.even}>sample</div>
      <div className={classes.odd}>sample</div>
    </div>
  );
};

export default Moves;
