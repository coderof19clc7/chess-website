import { makeStyles } from "@mui/styles";
// import { useEffect, useRef, useState } from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg"
import { ReactComponent as Knight } from "../assets/img/knight.svg"
import { ReactComponent as Amazon } from "../assets/img/amazon.svg"
import { ReactComponent as Custom } from "../assets/img/custom.svg"

const useStyles = makeStyles((theme) => ({
  navBar : {
    position: "relative",
    display: "inline-block",
    width: "220px",
    height: "100vh",
    backgroundColor: "rgb(var(--pri1))",
  },
  navItem : {
    display: "block",
    height: "60px",
    overflow: "hidden",
    "& svg": {
      height: "60px",
      width: "auto",
    },
    "& span": {
      width: "160px",
      textAlign: "center",
      fontSize: "28px",
      lineHeight: "60px",
      verticalAlign: "top",
      position: "relative",
      display: "inline-block",
      height: "100%",
    },
  },
}));
const NavBar = () => {
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
    <div className={classes.navBar}>
      <div className={classes.first}>
        <a href="/" className={classes.navItem}>
          <Logo />
          <span>CHESSPLUS</span>
        </a>
        <a href="/" className={classes.navItem}>
          <Knight />
          <span>Classic</span>
        </a>
        <a href="/" className={classes.navItem}>
          <Amazon />
          <span>Variants</span>
        </a>
        <a href="/" className={classes.navItem}>
          <Custom />
          <span>Custom</span>
        </a>
      </div>
      <div className={classes.second}>
        
      </div>
    </div>
  );
};

export default NavBar;
