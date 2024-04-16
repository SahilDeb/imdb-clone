import { renderHook, act } from "@testing-library/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryParams } from "../useQueryParams";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("useQueryParams Hook", () => {
  beforeEach(() => {
    useNavigate.mockImplementation(() => jest.fn());
  });

  test("test_useQueryParams_parsesQueryParams", () => {
    useLocation.mockImplementation(() => ({
      search: "?page=2&search=test",
    }));

    const { result } = renderHook(() => useQueryParams());

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentSearchWord).toBe("test");
  });

  test("test_useQueryParams_handlePageChange", () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);
    useLocation.mockImplementation(() => ({
      search: "?page=1&search=test",
    }));

    const { result } = renderHook(() => useQueryParams());
    act(() => {
      result.current.handlePageChange(3);
    });

    expect(navigateMock).toHaveBeenCalledWith({ search: "page=3&search=test" });
  });

  test("test_useQueryParams_handleSearch", () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);
    useLocation.mockImplementation(() => ({
      search: "",
    }));

    const { result } = renderHook(() => useQueryParams());
    act(() => {
      result.current.handleSearch("new search");
    });

    expect(navigateMock).toHaveBeenCalledWith({
      search: "page=1&search=new+search",
    });
  });
});
