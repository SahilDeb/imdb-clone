import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid__list: {
    display: "grid",
    gap: "2em",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 0fr))",
    justifyContent: "center",
    alignItems: "center",
  },
  empty__page: {
    textAlign: "center",
  },
  pagination: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
