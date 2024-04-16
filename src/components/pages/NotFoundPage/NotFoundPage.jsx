import { Link } from "react-router-dom";
import { useStyles } from "./NotFoundPage.style";

const NotFoundPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <h1>404 Page not found!</h1>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
