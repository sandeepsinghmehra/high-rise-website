"use client"
import React from "react";
import { useTheme, Paper, Typography, Container, Box, Stack, Grid } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Map from "./Map";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'hsla(60,6.67%,94.12%,1)',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    display: "flex", 
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: "none",
}));

export function  Footer(){
    const theme = useTheme();
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: {xs: '5px', md: '40px 20px'}, bgcolor: theme.palette.mode === 'light' ? 'hsla(60,6.67%,94.12%,1)': "#000" }}>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' } }}>
                            <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>Address</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>634 Summit Ave 2nd Floor</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Jersey City, NJ 07306</Typography>

                            <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Phone</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>(973) 352-1785</Typography>

                            <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Email</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Office@hill21construction.com</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' }, alignItems: "center", alignContent: 'center' }}>
                            <Map />
                        </Item>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' },}}>
                            <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Office Hours</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Monday-Friday</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>8 AM - 4 PM</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
