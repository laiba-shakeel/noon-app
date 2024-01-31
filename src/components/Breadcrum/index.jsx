import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LineSeparator from "../Separator";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Breadcrum = () => {
  const [show, setShow] = useState(false)

  return (
    <Stack
      sx={{
        border: 1,
        borderColor: "black",
        // height: 45,
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fcfbf4'
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
        <span
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
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
              fontWeight: "bold",
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 16,
            }}
          >
            All CATAGORIES
          </Typography>
        </span>
        <ArrowDropDownIcon fontSize="small" sx={{ color: "#3866df" }} />
        <LineSeparator />
      </Box>
      {show && <span style={{ marginTop: 3, padding: 5, backgroundColor: '#fcfbf4', width: 250 }}>
        <Stack style={{
          border: 1,
          borderColor: 'red',
          diplay: 'flex',
          flexDirection: 'column',
          gap:5
        }}>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
          <span>
            <Typography
              variant="p"
              flexWrap="wrap"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 0.8,
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "Cairo",
                fontWeight: 300,
                color: "#3866df",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: 20,
                textAlign: 'center'
              }}
            >
              Iteams
            </Typography>
          </span>
        </Stack>
      </span>
      }

      {/* {show && <span style={{border: 1, borderColor:'red'}}><Typography>i will be shown here</Typography></span>} */}
      {/* <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >

      </Stack> */}
    </Stack>
  );
};

export default Breadcrum;
