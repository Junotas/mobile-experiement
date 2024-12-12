import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { strings } from "../data/strings";

const GettingStarted = () => {
  const { title, steps, footer } = strings.sections.gettingStarted;

  return (
    <Box sx={{ width: "100%", py: 10, bgcolor: "primary.dark", color: "text.primary" }}>
      <Typography variant="h2" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        {title}
      </Typography>
      <List sx={{ px: 3 }}>
        {steps.map((step, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            {step}
          </ListItem>
        ))}
      </List>
      <Typography align="center" sx={{ mt: 3 }}>
        {footer}
      </Typography>
    </Box>
  );
};


export default GettingStarted;
