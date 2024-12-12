import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { strings } from '../data/strings';

const Tailwind = () => {
  const { title, description, features } = strings.sections.tailwind;

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: 'primary.main',
        color: 'text.primary',
        boxShadow: 2,
        borderRadius: 0, 
        p: 3,
      }}
    >
      <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        {title}
      </Typography>
      <Typography align="center" sx={{ mb: 3 }}>
        {description}
      </Typography>
      <List sx={{ px: 3 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            {feature}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tailwind;
