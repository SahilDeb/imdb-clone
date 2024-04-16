import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFoundPage from "../NotFoundPage";

describe("NotFoundPage Component", () => {
  test("NotFoundPage component should render without crashing", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText("404 Page not found!")).toBeInTheDocument();
  });

  test('NotFoundPage component should display a "404 Page not found!" message', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText("404 Page not found!")).toBeInTheDocument();
  });

  test("NotFoundPage component should contain a link to the Home Page", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Go back to Home Page")).toBeInTheDocument();
    expect(
      screen.getByText("Go back to Home Page").closest("a")
    ).toHaveAttribute("href", "/");
  });
});
