import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Typography, useTheme, Box } from "@mui/material";

export const Route = createFileRoute("/about")({
  component: () => {
    const [message, setMessage] = useState("We're just getting started!");
    const theme = useTheme();

    const toggleMessage = () => {
      setMessage((prevMessage) =>
        prevMessage === "We're just getting started!"
          ? "Stay tuned for more cool stuff!"
          : "We're just getting started!"
      );
    };

    return (
      <Box
        className="flex flex-col justify-center items-center ~min-h-screen/3xl"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Typography
          variant="h1"
          align="center"
          className="~text-lg/4xl mb-4/12"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
          }}
        >
          About Us
        </Typography>

        <Box className="flex justify-center ~space-x-6/12 ~mb-6/18">
          <img
            src={viteLogo}
            className="~h-12/24 animate-spin-slow"
            alt="Vite logo"
          />
          <img
            src={reactLogo}
            className="~h-12/24 animate-pulse"
            alt="React logo"
          />
        </Box>

        <Typography
          variant="body1"
          align="center"
          className="~text-base/2xl mb-4/12"
          sx={{
            color: theme.palette.text.primary,
            maxWidth: "600px",
          }}
        >
          We’re two logos just hanging out, waiting for you to build something
          cool with us!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={toggleMessage}
          className="~px-4/8 ~py-2/4 ~mb-2/6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Click for a Surprise!
        </Button>

        <Typography
          variant="h6"
          align="center"
          className="~text-lg/2xl mt-2/6"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {message}
        </Typography>
      </Box>
    );
  },
});
