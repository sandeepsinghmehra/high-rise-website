"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {motion} from 'framer-motion';
import { fadeInUpAnimation } from '@/components/Farmer-motion/Variants';

const HeroLayoutRoot = styled(motion.section)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    // maxHeight: 1300,
  },
}));

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function HeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot
      initial={{ opacity: 0 }}
      animate={"show"}
      variants={fadeInUpAnimation}
      style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.3,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </HeroLayoutRoot>
  );
}


export default HeroLayout;