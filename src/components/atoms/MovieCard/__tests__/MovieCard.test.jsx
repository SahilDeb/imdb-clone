import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "../MovieCard";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("MovieCard Component", () => {
  const movieData = {
    imdbID: "tt1234567",
    Poster: "https://example.com/poster.jpg",
    Title: "Test Movie",
    Type: "movie",
    Year: "2021",
  };

  test("The MovieCard component should render correctly with the provided movie data", () => {
    render(
      <BrowserRouter>
        <MovieCard movie={movieData} />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("MOVIE")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/poster.jpg"
    );
  });

  test("The MovieCard component should navigate to the correct URL when clicked", () => {
    render(
      <BrowserRouter>
        <MovieCard movie={movieData} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockedNavigate).toHaveBeenCalledWith("/movie-details/tt1234567");
  });

  test("The MovieCard component should handle missing movie data gracefully", () => {
    const incompleteData = { imdbID: "tt1234567" }; // Missing most of the data
    render(
      <BrowserRouter>
        <MovieCard movie={incompleteData} />
      </BrowserRouter>
    );

    expect(screen.queryByText("Test Movie")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(() => screen.getByText("MOVIE")).toThrow();
    expect(() => screen.getByText("2021")).toThrow();
  });
});
