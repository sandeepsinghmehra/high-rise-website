"use client"

import { Typography, useTheme } from "@mui/material";


export default function PageTitle() {
  const theme:any = useTheme();
  return (
    <>
      <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"} p={10} sx={{fontSize: "500"}} align='center'>
          Our efforts to develop efficient construction management systems by leveraging modern LLM technology.
      </Typography>
    </>
  );
}
