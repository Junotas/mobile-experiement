import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useUserList } from "../hooks/useUserList";
import { Button, IconButton, TextField, useTheme, Typography, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export const Route = createFileRoute("/list")({
  component: () => {
    const [newUserName, setNewUserName] = useState("");
    const {
      users,
      isLoading,
      error,
      toggleFetch,
      addUser,
      removeUser,
      isModified,
    } = useUserList();

    const theme = useTheme();

    const handleAddUser = () => {
      if (newUserName.trim()) {
        addUser(newUserName);
        setNewUserName("");
      }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleAddUser();
    };

    return (
      <Box
        className="flex flex-col justify-center items-center min-h-screen"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Box
          className="w-full max-w-md"
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[3],
            padding: theme.spacing(3),
            color: theme.palette.text.primary,
          }}
        >
          <Box className="flex justify-between items-center border-b pb-3 mb-4">
            <Box className="flex items-center space-x-2">
              <GroupIcon sx={{ color: theme.palette.primary.main }} />
              <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
              >
                User List
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleFetch}
              sx={{ fontWeight: "bold", marginBottom: 2 }}
              startIcon={<ReplayCircleFilledIcon />}
            >
              {isModified ? "Reset List" : "Fetch List"}
            </Button>
          </Box>

          <Box
            className="max-h-[250px] overflow-y-auto scrollbar-thin"
            sx={{
              scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[200]}`,
            }}
          >
            {isLoading ? (
              <Typography>Loading users...</Typography>
            ) : error ? (
              <Typography sx={{ color: theme.palette.error.main }}>
                Error loading users
              </Typography>
            ) : (
              <ul className="list-disc list-inside text-center space-y-2">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex justify-between items-center text-lg"
                    style={{ color: "black" }} // Set to black explicitly
                  >
                    {user.name}
                    <IconButton
                      onClick={() => removeUser(user.id)}
                      sx={{ color: theme.palette.secondary.main }}
                      aria-label="delete user"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </li>
                ))}
              </ul>
            )}
          </Box>

          <form onSubmit={handleFormSubmit} className="flex items-center mt-4">
            <TextField
              variant="outlined"
              label="Add new user"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              fullWidth
              sx={{
                mr: 2,
                "& .MuiInputBase-input": {
                  color: "black", // Set input text to black explicitly
                },
                "& .MuiInputLabel-root": {
                  color: "black", // Set label text to black explicitly
                },
              }}
            />
            <IconButton type="submit" color="secondary" aria-label="add user">
              <AddCircleIcon />
            </IconButton>
          </form>
        </Box>
      </Box>
    );
  },
});
