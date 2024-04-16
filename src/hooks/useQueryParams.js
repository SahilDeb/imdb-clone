import { useNavigate, useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get("page")) || 1;
  const currentSearchWord = queryParams.get("search") || undefined;

  const handlePageChange = (newPage) => {
    // update query parameters with new page number
    queryParams.set("page", newPage);
    navigate({ search: queryParams.toString() });
  };

  const handleSearch = (searchWord) => {
    queryParams.set("page", 1);
    queryParams.set("search", searchWord);
    navigate({ search: queryParams.toString() });
  };

  return {
    currentPage,
    currentSearchWord,
    handleSearch,
    handlePageChange,
  };
};
