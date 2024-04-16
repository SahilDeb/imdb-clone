import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import DetailsPage from "../DetailsPage";
import * as api from "../../../../api/query";

jest.mock("../../../../api/query", () => ({
  useGetMovies: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    imdbId: "validImdbId",
  }),
  useNavigate: jest.fn(),
}));

describe("DetailsPage", () => {
  test("test_fetch_and_display_movie_details", async () => {
    api.useGetMovies.mockImplementation(() => ({
      getMovieDetails: () =>
        Promise.resolve({
          Title: "Test Movie",
          Year: "2021",
          Rated: "PG-13",
          Released: "10-10-2021",
          Genre: "Drama",
          Writer: "John Doe",
          Actors: "Jane Doe, John Smith",
          Plot: "This is a test movie",
          Language: "English",
          Awards: "None",
          Poster: "https://example.com/poster.jpg",
        }),
    }));

    render(
      <Router>
        <DetailsPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Movie")).toBeInTheDocument();
      expect(screen.getByText("Year: 2021")).toBeInTheDocument();
      expect(screen.getByAltText("Test Movie")).toHaveAttribute(
        "src",
        "https://example.com/poster.jpg"
      );
    });
  });

  test("test_handle_invalid_imdbId", async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    api.useGetMovies.mockImplementation(() => ({
      getMovieDetails: () => Promise.reject(new Error("Request failed")),
    }));

    render(
      <Router>
        <DetailsPage />
      </Router>
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
  });

  test("test_back_button_navigation", async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    api.useGetMovies.mockImplementation(() => ({
      getMovieDetails: () =>
        Promise.resolve({
          Title: "Test Movie",
          Year: "2021",
          Rated: "PG-13",
          Released: "10-10-2021",
          Genre: "Drama",
          Writer: "John Doe",
          Actors: "Jane Doe, John Smith",
          Plot: "This is a test movie",
          Language: "English",
          Awards: "None",
          Poster: "https://example.com/poster.jpg",
        }),
    }));

    render(
      <Router>
        <DetailsPage />
      </Router>
    );

    const backButton = screen.getByLabelText("go-back");
    fireEvent.click(backButton);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
  });
});
