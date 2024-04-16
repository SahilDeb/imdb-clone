import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as queryHooks from "../../../../hooks/useQueryParams";
import * as apiHooks from "../../../../api/query";
import HomePage from "../HomePage";

jest.mock("../../../../hooks/useQueryParams");
jest.mock("../../../../api/query");

describe("HomePage Tests", () => {
  beforeEach(() => {
    queryHooks.useQueryParams.mockReturnValue({
      currentPage: 1,
      currentSearchWord: "",
      handlePageChange: jest.fn(),
      handleSearch: jest.fn(),
    });

    apiHooks.useGetMovies.mockReturnValue({
      getMovieList: jest.fn(),
    });
  });

  test("test_homePage_initialization", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByText("Search above to get results")).toBeInTheDocument();
  });

  test("test_handleMovieSearch_updatesState", async () => {
    apiHooks.useGetMovies().getMovieList.mockResolvedValue({
      Response: "True",
      totalResults: "20",
      Search: [{ imdbID: "tt1234567", Title: "Test Movie", Year: "2021" }],
    });

    render(
      <Router>
        <HomePage />
      </Router>
    );
    fireEvent.change(screen.getByLabelText("Enter keywords..."), {
      target: { value: "Test" },
    });
    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(screen.getByText("Test Movie")).toBeInTheDocument();
    });
  });
});
