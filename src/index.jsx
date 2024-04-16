import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import DetailsPage from "./components/pages/DetailsPage/DetailsPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie-details/:imdbId",
    element: <DetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
