import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useQueryParams } from "../../../../hooks/useQueryParams";
import HeaderSection from "../HeaderSection";

jest.mock("../../../../hooks/useQueryParams.js");

describe("HeaderSection Component", () => {
  it("should render a header section with a logo, heading, search input and search button", () => {
    const search = "";
    const setSearch = jest.fn();
    const handleSearch = jest.fn();
    useQueryParams.mockReturnValue({
      handleSearch: jest.fn(),
    });

    render(
      <HeaderSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    );

    expect(screen.getByText("MyIMDB")).toBeInTheDocument();
    expect(screen.getByLabelText("Enter keywords...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should call the setSearch function with the event target value when the TextField component's onChange event is triggered", () => {
    const search = "";
    const setSearch = jest.fn();
    const handleSearch = jest.fn();
    useQueryParams.mockReturnValue({
      handleSearch: jest.fn(),
    });

    render(
      <HeaderSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    );
    fireEvent.change(screen.getByLabelText("Enter keywords..."), {
      target: { value: "Matrix" },
    });

    expect(setSearch).toHaveBeenCalledWith("Matrix");
  });

  it("should call the handleSearch and handleSearchQueryParamChange functions when the Button component's onClick event is triggered", () => {
    const search = "Matrix";
    const setSearch = jest.fn();
    const handleSearch = jest.fn();
    const handleSearchQueryParamChange = jest.fn();
    useQueryParams.mockReturnValue({
      handleSearch: handleSearchQueryParamChange,
    });

    render(
      <HeaderSection
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearchQueryParamChange).toHaveBeenCalledWith(search);
  });
});
