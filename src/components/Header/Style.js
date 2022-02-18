import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "1.5rem 2rem 1rem 2rem",
    backgroundColor: "#E5E5E5",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  header__navigation: {
    display: "flex",
    justifyContent: "space-evenly",
    flex: "3",
    textAlign: "center",
  },
  header__logo: {
    textAlign: "center",
    flex: "1",
    position: "relative",
  },
  header__image: {
    width: "10rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  header__list: {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none",
    flex: "3",
  },
  header__link: {
    textDecoration: "none",
    color: " #000000",
    fontSize: "0.81rem",
    color: "#5f5f5f",
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.1)",
      color: "#024D81",
    },
  },
  header__icon: {
    flex: "1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  },
  header__tradeMark: {
    flex: "1",
    textAlign: "center",
    position: "relative",
  },
  tradeMark__image: {
    width: "8.9rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  header__iconBox: {
    position: "relative",
  },
}));

export default useStyles;
