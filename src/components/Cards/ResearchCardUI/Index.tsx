"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function CustomCardResearch(props) {

  return (
    <Container component="section" maxWidth={false} sx={{ pt: 5, pb: 5, height: '100%', maxWidth: '100%' }}>
      <Grid container columns={{ xs: 6, md: 12 }} sx={{ height: '100%'}} direction={props.directionImage || 'row'}>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box 
              sx={{ p: 3 }}
            >
                <Typography variant="h3" component="h3" gutterBottom>
                    {props.title}
                </Typography>
              <Typography variant="subtitle1">
               {props.description}
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
            alt={`Research Image ${props.image_url}`}
            sx={{
              width: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CustomCardResearch;