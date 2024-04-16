import { useState, useCallback, useEffect } from "react";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { useGetMovies } from "../../../api/query";
import HeaderSection from "../../molecules/HeaderSection/HeaderSection";
import MovieListSection from "../../molecules/MovieListSection/MovieListSection";
import { useStyles } from "./HomePage.style";

const HomePage = () => {
  const { classes } = useStyles();

  const {
    currentPage: pageFromQuery,
    currentSearchWord: searchFromQuery,
    handlePageChange: handlePageQueryParamChange,
  } = useQueryParams();

  const [search, setSearch] = useState(searchFromQuery || "");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(pageFromQuery || 1);

  const { getMovieList } = useGetMovies();

  useEffect(() => {
    if (search !== searchFromQuery) {
      handleMovieSearch();
    }
  }, []);

  useEffect(() => {
    if (pageFromQuery !== currentPage) {
      setCurrentPage(pageFromQuery);
    }
  }, [pageFromQuery]);

  const handleMovieSearch = useCallback(async () => {
    if (search) {
      setIsLoading(true);
      const response = await getMovieList(search, currentPage);
      if (response.Response === "True") {
        setPageCount(Math.ceil(+response.totalResults / 10));
        setMovieList(response.Search);
      } else {
        setMovieList([]);
      }
      setIsLoading(false);
      setHasResult(true);
    }
  }, [search, currentPage]);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
    handlePageQueryParamChange(value);
  };

  useEffect(() => {
    if (currentPage) {
      handleMovieSearch();
    }
  }, [currentPage]);

  return (
    <div className={classes.container}>
      <HeaderSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleMovieSearch}
      />
      <MovieListSection
        isLoading={isLoading}
        hasResult={hasResult}
        movieList={movieList}
        totalpageCount={pageCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
