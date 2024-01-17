import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../assets/noon-logo.png";
import flagIncon from "../../assets/flag-icon.png";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LineSeparator from "../Separator";
import NavItem from "./NavItem";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  backgroundColor: "white",
  color: "darkgray",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#feee00" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ width: 85, height: 25 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "100%",
                width: "100%",
                display: { xs: "none", md: "flex" },
                mr: 2,
              }}
            />
          </Box>
          <Box
            onClick={() => {
              console.log("hellow navbar");
            }}
            noWrap
            sx={{
              ml: 2,
              alignItems: "center",
              display: "flex",
              justifyItems: "center",
            }}
          >
            <img
              src={flagIncon}
              alt="Logo"
              style={{
                height: 20,
                width: 35,
                display: { xs: "none", md: "flex" },
                mr: 2,
              }}
            />
            <Box
              sx={{ flexDirection: "column", gap: 7, justifyItems: "center" }}
            >
              <Typography
                variant="p"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  ml: 0.8,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "GrayText",
                  textDecoration: "none",
                  fontSize: 12,
                }}
              >
                Deliver to
              </Typography>
              <Typography
                variant="p"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  ml: 0.8,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  fontSize: 14,
                  mt: 0.4,
                }}
              >
                Dubai
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, mb: 2, ml: 1 }}>
              <ExpandMoreIcon color="action" />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: 550,
              height: 35,
              ml: 3,
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <NavItem />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
