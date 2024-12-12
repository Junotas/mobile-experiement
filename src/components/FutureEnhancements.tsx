import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { strings } from "../data/strings";

const FutureEnhancements = () => {
  const { title, description, features } = strings.sections.future;

  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        bgcolor: "primary.main", 
        color: "text.primary", 
      }}
    >
      <Typography variant="h2" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
        {title}
      </Typography>
      <Typography align="center" sx={{ mb: 3 }}>
        {description}
      </Typography>
      <List sx={{ maxWidth: 800, mx: "auto", px: 3 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            {feature}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FutureEnhancements;
