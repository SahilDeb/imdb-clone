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
    height: "80vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    padding: "50px",
    backgroundColor: "#144184",
    color: "#ffffff",
    fontSize: "20px",
  },
  circular__progress: {
    color: "#ffffff",
  },
  movie__poster: {
    border: "4px solid #7B68EE",
    width: "30%",
    maxWidth: "30%",
  },
  movie__container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "80%",
  },
  movie__details: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "60%",
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
