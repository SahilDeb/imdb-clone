import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  header: {
    height: "auto",
    backgroundColor: "#144184",
    position: "relative",
    zIndex: 99,
    padding: "20px 10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    padding: "50px",
    backgroundColor: "#144184",
    color: "#ffffff",
    fontSize: "20px",
    [theme.breakpoints.up("md")]: {
      height: "80vh",
    },
  },
  circular__progress: {
    color: "#ffffff",
  },
  movie__poster: {
    width: "35vh",
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxShadow: "4px 4px #7B68EE",
  },
  movie__container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "50px",
    [theme.breakpoints.up("md")]: {
      gap: 0,
      maxWidth: "80%",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  movie__details: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  chip__container: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    padding: "5px",
    margin: "0 5px",
  },
  chip__yellow: {
    backgroundColor: "#CCCC00",
  },
  chip__gray: {
    backgroundColor: "#C0C0C0",
  },
}));
