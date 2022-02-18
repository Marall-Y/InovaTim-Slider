import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "2rem 0",
    borderRadius: "1rem",
    backgroundColor: "#FFFFFF",
    margin: "1.5rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  heading: {
    margin: " 0 0 3rem 3rem",
    color: "#024D81",
    fontSize: "1.1rem",
    // fontWeight: "400",
  },
  slider: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
  },
  root: {
    maxWidth: "13rem",
    marginRight: "1rem",
    "& .MuiCardContent-root": {
      padding: 0,
    },
  },
  arrows: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  arrow: {
    color: "#D2D2D2",
    fontSize: "3rem",
    cursor: "pointer",
    marginTop: "8.27rem",
  },
  image: {
    width: "100%",
  },
  buttonBox: {
    maxWidth: "13rem",
    padding: "1rem",
    position: "relative",
    height: "307.438px",
    "& .MuiButton-contained": {
      backgroundColor: "#024D81",
    },
  },
  continue: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "0.8rem",
    color: "#ffffff",
  },
}));

export default useStyles;
