"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function CustomCardProject(props) {

  return (
    <Container component="section" maxWidth={false} sx={{ pt: 10, pb: 10, height: '100%', maxWidth: '100%' }}>
      <Grid container columns={{ xs: 6, md: 12 }} sx={{ height: '100%'}}  direction={props.directionImage || 'row'}>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box 
              sx={{ p: 5 }}
            >
              <Typography variant="h4" component="h4" gutterBottom>
                {props.title1}
              </Typography>
              <Typography variant="h5" component="h5" gutterBottom>
                {props.title2}
              </Typography>
              <Typography component="p">
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
            alt={`${props.image_url}-Image`}
            sx={{
              width: '100%',
              height: 'fit',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CustomCardProject;