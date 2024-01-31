import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ElectronicMblComp from './ElectronicMblComp';

const CatagoriesList = () => {
  const [showElecMbl, setShowElecMbl] = useState(false);
  return (
    <>
      <Stack style={{
        border: 1,
        borderColor: 'red',
        diplay: 'flex',
        flexDirection: 'column',
        gap: 5
      }}>
        <span 
        style={{display:'flex', flexDirection:'row',flex:1}}
          onMouseOver={() => setShowElecMbl(true)}
          onMouseLeave={() => setShowElecMbl(false)}
          >
          <Typography
            variant="p"
            flexWrap="wrap"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 0.8,
              mt: 2,
              display: { xs: "none", sm: "flex", md: "flex" },
              fontFamily: "Cairo",
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Electronics & Mobiles
          </Typography>
          {showElecMbl && <ElectronicMblComp /> }  
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Beauty & FRagrance
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Fashion
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Home & Kitchen
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Sports & Outdoors
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Toys & Games
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Health & Nutrition
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Automotive
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Tools & Home Improvement
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Pet Supplies
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Office Supplies & Stationary
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Music, Movies & TV Shows
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
              fontWeight: 200,
              color: "#3866df",
              textDecoration: "none",
              letterSpacing: 1,
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            Mahali
          </Typography>
        </span>
      </Stack>
    </>
  )
}

export default CatagoriesList
