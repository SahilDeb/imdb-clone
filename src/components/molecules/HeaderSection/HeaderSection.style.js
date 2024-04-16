import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  logo__container: {
    padding: "10px 20px",
  },
  logo: {
    color: "#ffffff",
    textDecoration: "none",
  },
  header: {
    height: "auto",
    backgroundColor: "#144184",
    marginBottom: "25px",
    position: "relative",
    zIndex: 99,
  },
  container: {
    width: "100%",
    margin: "0 0 80px 0",
  },
  header__home: {
    textAlign: "center",
    width: "100%",
    display: "inline-block",
  },
  heading: {
    fontSize: "2.2em",
    fontWeight: 300,
    paddingRight: "30px",
    margin: "0 0 30px 0",
    color: "#ffffff",
  },
  search__home: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    maxWidth: "80%",
  },
  search__content: {
    position: "relative",
    marginRight: "80px",
    bottom: "-35px",
    display: "flex",
    justifyContent: "space-between",
  },
  search__input: {
    marginRight: "20px",
    width: "100%",
    backgroundColor: "#ffffff",
  },
}));
