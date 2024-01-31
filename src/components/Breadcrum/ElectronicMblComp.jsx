import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ElectronicMblComp = () => {
    return (
        <>
            <Stack style={{ display: 'flex', flexDirection: 'column', flexGrow:1, width:'100%',marginLeft:100, height:100, backgroundColor:'white'}}>
                <Typography
                    variant="p"
                    flexWrap="wrap"
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        // ml: 0.8,
                        // mt: 2,
                        display: { xs: "none", sm: "flex", md: "flex" },
                        fontFamily: "Cairo",
                        fontWeight: 600,
                        color: "#3866df",
                        textDecoration: "none",
                        letterSpacing: 1,
                        fontSize: 18,
                        textAlign: 'center'
                    }}
                >
                    Electronics & Mobiles
                </Typography>
            </Stack>
        </>
    )
}

export default ElectronicMblComp
