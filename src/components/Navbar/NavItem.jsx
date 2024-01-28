import { Box, Typography } from "@mui/material";
import React from "react";
import LineSeparator from "../Separator";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
const NavItem = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    // console.log('ndbsb')
    navigate('/profile')
  }
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
        display: { xs: "none", sm: "flex", md: "flex" },
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography
        variant="p"
        flexWrap="wrap"
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          ml: 0.8,
          display: { xs: "none", sm: "flex", md: "flex" },
          fontFamily: "Cairo",
          fontWeight: 600,
          color: "black",
          textDecoration: "none",
          letterSpacing: 1,
          fontSize: 16,
        }}
      >
        العربية
        <LineSeparator />
      </Typography>
      <span onClick={handleProfileClick}>
        <Typography
          variant="p"
          flexWrap="wrap"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            ml: 0.8,
            display: { xs: "none", sm: "flex", md: "flex" },
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "black",
            textDecoration: "none",
            fontSize: 16,
            maxWidth: 130,
          }}
        >
          Profile
          <PersonOutlineIcon
            fontSize="small"
            sx={{ color: "#3c414f", ml: 0.5 }}
          />
          <LineSeparator />
        </Typography>
      </span>
      <Typography
        variant="p"
        flexWrap="wrap"
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          ml: 0.8,
          display: { xs: "none", sm: "flex", md: "flex" },
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
          fontSize: 16,
          maxWidth: 130,
        }}
      >
        Wishlist
        <FavoriteBorderIcon
          fontSize="small"
          sx={{ color: "#3c414f", ml: 0.5 }}
        />
        <LineSeparator />
      </Typography>
      <Typography
        variant="p"
        flexWrap="wrap"
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          ml: 0.8,
          display: { xs: "none", sm: "flex", md: "flex" },
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
          fontSize: 16,
          maxWidth: 130,
        }}
      >
        Cart
        <ShoppingCartCheckoutIcon
          fontSize="small"
          sx={{ color: "#3c414f", ml: 0.5 }}
        />
      </Typography>
    </Box>
  );
};

export default NavItem;
