"use client"

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 300 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Slider = () => {
    const sliderImageUrl = [
        {url: "/assets/Slider/image_1.jpg"},
        {url: "/assets/Slider/image_2.jpg"},
        {url: "/assets/Slider/image_3.jpg"},
        {url: "/assets/Slider/image_4.jpg"},
        {url: "/assets/Slider/image_5.jpg"},
        {url: "/assets/Slider/image_6.jpg"},
        {url: "/assets/Slider/image_7.jpg"},
        {url: "/assets/Slider/image_8.jpeg"},
        {url: "/assets/Slider/image_9.jpeg"},
        {url: "/assets/Slider/image_10.jpeg"},
        {url: "/assets/Slider/image_11.jpg"},
        {url: "/assets/Slider/image_12.jpg"},
    ]
    const CustomRight:any = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{ 
                color: 'red',
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}
        >
            <WestIcon fontSize="small" />
        </IconButton>
    );
    const CustomLeft:any = ({ onClick }) => (
        <IconButton
            sx={{
                transform: 'rotate(180deg)', // Rotates the icon by 45 degrees
                transition: 'transform 0.3s ease-in-out', // Smooth transition
                color: 'red',
                background: "transparent",
                border: 0,
                position: 'absolute',
                bottom: 0,
                left: 40,
            }}
            onClick={onClick}
        >
                <WestIcon fontSize="small" />
            </IconButton>
    );
    return (
        <Box sx={{px: 5}}>
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={true}
                partialVisible={false}
                customRightArrow={<CustomRight />}
                customLeftArrow={<CustomLeft />}
            >
            {sliderImageUrl.map((item, index) => {
                return (
                    <Box sx={{overflow: "hidden", padding: "2rem 0"}} key={index}>
                        <Image 
                            style={{width: '100%', height: '230px'}} 
                            src={item.url} 
                            alt={`slider-${item.url}`} 
                            width={350}
                            height={230}
                            priority
                        />
                    </Box>
                );
            })}
            </Carousel>
        </Box>
    );
};
export default Slider;