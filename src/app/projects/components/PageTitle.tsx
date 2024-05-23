"use client"

import { Box, Typography, useTheme } from "@mui/material";


export default function PageTitle(props) {
    const theme:any = useTheme();
    return (
        <Box component="div" sx={{ p: "80px 30px",bgcolor:theme.palette.mode === 'light' ? "hsla(60,6.67%,94.12%,1)": "#000" }}>
            <Typography 
                gutterBottom 
                variant="h3" 
                component="div" 
                margin={5} 
                align='center' 
                height={60} 
                color={theme.palette.mode === 'light' ? "#000": "#fff"}
            >
                {props.title}
            </Typography>
        </Box>
    );
}
