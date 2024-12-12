import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "./index.css";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

const theme = createTheme({
  palette: {
    primary: {
      light: "#9c4dcc", // Light shade of purple
      main: "#6a1b9a",  // Main purple
      dark: "#38006b",  // Dark shade of purple
      contrastText: "#ffffff", // Text color for primary
    },
    secondary: {
      light: "#ff79b0", // Light shade of pinkish-red
      main: "#ff4081",  // Main pinkish-red
      dark: "#c60055",  // Dark shade of pinkish-red
      contrastText: "#000000", // Text color for secondary
    },
    text: {
      primary: "#ffffff", // white for primary text
      secondary: "#757575", // Medium gray for secondary text
    },
    background: {
      default: "#6a1b9a", // Dark background for the entire app
      paper: "#ffffff",   // white background for paper elements
    },
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
