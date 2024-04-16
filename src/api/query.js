import { ENDPOINTS } from "./endpoints";

export const useGetMovies = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovieList = async (searchWord, page = 1) => {
    if (searchWord) {
      try {
        const response = await fetch(
          `${ENDPOINTS.OBDB_API}?apikey=${apiKey}&s=${searchWord}&page=${page}`
        );
        const data = await response.json();
        return data;
      } catch (err) {
        return new Promise.reject(new Error("Request failed"));
      }
    } else {
      return [];
    }
  };

  const getMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `${ENDPOINTS.OBDB_API}?apikey=${apiKey}&i=${id}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return new Promise.reject(new Error("Request failed"));
    }
  };

  return {
    getMovieList,
    getMovieDetails,
  };
};
