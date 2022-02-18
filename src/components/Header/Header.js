import React from "react";
import Logo from "../../images/logo.png";
import TradeMark from "../../images/trademark.png";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./Style";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <img src={Logo} className={classes.header__image} />
      </div>
      <div className={classes.header__navigation}>
        <ul className={classes.header__list}>
          <li className={classes.header__link}>ANASAYFA</li>
          <li className={classes.header__link}>CHAT</li>
          <li className={classes.header__link}>PUANLAR</li>
          <li className={classes.header__link}>SINIFIM</li>
          <li className={classes.header__link}>EĞİTİM </li>
        </ul>
        <div className={classes.header__iconBox}>
          <MenuIcon className={classes.header__icon} />
        </div>
      </div>
      <div className={classes.header__tradeMark}>
        <img src={TradeMark} className={classes.tradeMark__image} />
      </div>
    </div>
  );
};

export default Header;
