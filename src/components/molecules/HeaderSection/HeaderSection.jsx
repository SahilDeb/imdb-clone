import { useStyles } from "./HeaderSection.style";
import { Button, TextField } from "@mui/material";
import { useQueryParams } from "../../../hooks/useQueryParams";
import PropTypes from "prop-types";

// TODO: Add mobile stylings
const HeaderSection = ({ search, setSearch, handleSearch }) => {
  const { classes } = useStyles();
  const { handleSearch: handleSearchQueryParamChange } = useQueryParams();

  const handleButtonClick = () => {
    handleSearchQueryParamChange(search);
    handleSearch();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <section className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo__container}>
          <a href="/" className={classes.logo}>
            <h1>MyIMDB</h1>
          </a>
        </div>
        <div className={classes.header__home}>
          <div>
            <h5 className={classes.heading}>Find Movies, TV shows and more</h5>
          </div>
          <div className={classes.search__home}>
            <div className={classes.search__content}>
              <TextField
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                onKeyDown={handleKeyDown}
                className={classes.search__input}
                label="Enter keywords..."
              />
              <Button onClick={() => handleButtonClick()} variant="contained">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderSection.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default HeaderSection;
