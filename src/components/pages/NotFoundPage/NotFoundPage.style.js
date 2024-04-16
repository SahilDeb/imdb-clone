import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    height: "90vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
  },
}));
