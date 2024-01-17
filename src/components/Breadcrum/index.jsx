import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LineSeparator from "../Separator";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Breadcrum = () => {
  return (
    <Stack
      sx={{
        border: 1,
        borderColor: "black",
        height: 45,
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: { xs: "none", sm: "flex", md: "flex" },
          flexDirection: "row",
        //   justifyContent: "space-around",
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
            color: "#3866df",
            textDecoration: "none",
            letterSpacing: 1,
            fontSize: 12,
          }}
        >
          All CATAGORIES
        </Typography>
        <ArrowDropDownIcon fontSize="small" sx={{ color: "#3866df" }} />
        <LineSeparator />
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        
      </Stack>
    </Stack>
  );
};

export default Breadcrum;
