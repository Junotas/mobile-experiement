import React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import { Home as HomeIcon, Info as InfoIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const baseLinkStyles =
  "flex items-center space-x-2 hover:transition font-bold";

export const Route = createRootRoute({
  component: () => {
    const theme = useTheme(); // Access the theme

    return (
      <>
        <nav
          className="flex space-x-6 p-4 shadow-md"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Link
            to="/"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <HomeIcon fontSize="small" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <InfoIcon fontSize="small" />
            <span>About</span>
          </Link>
          <Link
            to="/list"
            activeProps={{}}
            className={baseLinkStyles}
            style={{
              color: theme.palette.primary.contrastText,
              transition: "color 0.3s",
            }}
          >
            <ListAltSharpIcon fontSize="small" />
            <span>List</span>
          </Link>
        </nav>
        <Outlet />
      </>
    );
  },
});
