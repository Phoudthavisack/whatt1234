import React from "react";
// material
import {
  Box,
  CssBaseline,
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
// router
import { Outlet, Link } from "react-router-dom";
// icons
import { AiOutlineRight, AiOutlineTransaction } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
// -------------------------------------- //
export default function Testlayout() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Card sx={{ backgroundColor: "#fafafa" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            gap: 1,
          }}>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 56, height: 56 }}
          />
          ສຸກທະວີ
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <AiOutlineRight />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BsInfoCircleFill />
              </ListItemIcon>
              <ListItemText primary='Customer Info' />
            </ListItemButton>
          </ListItem>
          <ListItem
            components={Link}
            to='transaction'
            disablePadding
            sx={{
              color: theme.palette.text.secondary,
              fill: theme.palette.text.secondary,
            }}>
            <ListItemButton>
              <ListItemIcon>
                <AiOutlineTransaction
                  style={{ fill: theme.palette.text.secondary }}
                />
              </ListItemIcon>
              <ListItemText primary='Transaction' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaUsers />
              </ListItemIcon>
              <ListItemText primary='User Management' />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
      <Card>
        <Outlet />
      </Card>
      <CssBaseline />
    </RootStyle>
  );
}

const RootStyle = styled(Box)({
  backgroundColor: "#e5e5e5",
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  gridGap: 15,
  padding: 10,
});
