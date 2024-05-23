"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function HomeAboutCardUI(props) {

  return (
    <Container component="section" maxWidth={false} sx={{ pt: 10, pb: 10, height: '100%', maxWidth: '100%' }}>
      <Grid container columns={{ xs: 6, md: 12 }} sx={{ height: '100%'}}>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box 
              sx={{ p: 5 }}
            >
                <Typography variant="h3" component="h3" gutterBottom>
                    About Us
                </Typography>
              <Typography component="p">
                We are Construction Company with over 25 years of experience in the Construction Management 
                and General Contracting domain. Our extensive experience, professionally skilled and eager staff and our unwavering commitment to excellence enables us to deliver high quality projects on time and monitoring the budget within set constraints. 
                HRCS collaborates with Developers, Architects, Designers, and Engineers to schedule 
                and put together all phases of the Construction Process and offer Construction Management 
                and Consulting Services for Residential and Commercial Construction projects including 
                but not limited to Ground-Up Construction, Design-Build, Remodels and Renovations, Period Restorations,Hardscape/ Landscape, and other specialty projects in the New York/ New Jersey Area. Our team is dedicated to the highest standards of professionalism and client satisfaction.
              </Typography>
            </Box>
        </Grid>
        <Grid
          item
          xs={12} md={6}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            overflow: {md:'hidden'} }}
        >
          <Box
            component="img"
            src={props.image_url}
            alt="Team Image"
            sx={{
              width: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeAboutCardUI;