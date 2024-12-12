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
        className="flex flex-col justify-center items-center min-h-screen"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(4),
          }}
        >
          About Us
        </Typography>

        <Box className="flex justify-center space-x-12 mb-8">
          <img
            src={viteLogo}
            className="h-32 animate-spin-slow"
            alt="Vite logo"
          />
          <img
            src={reactLogo}
            className="h-32 animate-pulse"
            alt="React logo"
          />
        </Box>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(4),
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
          sx={{ fontWeight: "bold", marginBottom: theme.spacing(2) }}
        >
          Click for a Surprise!
        </Button>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: theme.palette.text.primary,
            marginTop: theme.spacing(2),
          }}
        >
          {message}
        </Typography>
      </Box>
    );
  },
});
