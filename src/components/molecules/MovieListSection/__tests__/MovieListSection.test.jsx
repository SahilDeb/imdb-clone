import { render, screen } from "@testing-library/react";
import MovieListSection from "../MovieListSection";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("MovieListSection", () => {
  test("test_loading_spinner_displayed_when_loading", () => {
    render(
      <BrowserRouter>
        <MovieListSection isLoading={true} movieList={[]} hasResult={false} />
      </BrowserRouter>
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("test_movie_list_and_pagination_displayed_when_movieList_not_empty", () => {
    const movieList = [
      {
        imdbID: "tt0111161",
        Title: "The Shawshank Redemption",
        Poster: "some_url",
        Type: "movie",
        Year: "1994",
      },
      {
        imdbID: "tt0068646",
        Title: "The Godfather",
        Poster: "some_url",
        Type: "movie",
        Year: "1972",
      },
    ];
    render(
      <BrowserRouter>
        <MovieListSection
          isLoading={false}
          movieList={movieList}
          totalpageCount={2}
          currentPage={1}
        />
      </BrowserRouter>
    );
    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
    expect(screen.getByText("The Godfather")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("test_appropriate_message_displayed_when_movieList_empty", () => {
    render(
      <BrowserRouter>
        <MovieListSection isLoading={false} movieList={[]} hasResult={true} />
      </BrowserRouter>
    );

    expect(screen.getByText("No movies found!")).toBeInTheDocument();

    render(
      <BrowserRouter>
        <MovieListSection isLoading={false} movieList={[]} hasResult={false} />
      </BrowserRouter>
    );
    expect(screen.getByText("Search above to get results")).toBeInTheDocument();
  });
});
