import Slider from "react-slick";
import React, { Component } from 'react';
import { Box, Button, Flex, Heading, MenuList, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, Icon } from "@chakra-ui/icons";
import Card from "./card";
import {carouselData} from "../pages/api/data"



class Carousel extends Component {
    renderArrows = () => {
      return (
        <Flex justifyContent='flex-end' className="slider-arrow">
          <Button
            className="arrow-btn prev"
            onClick={() => this.slider.slickPrev()}
            ml='5'
            mb='2'
            p='1'
            borderRadius='50%'
            colorScheme='gray'
          >
            <Icon as={ArrowLeftIcon} /> 
          </Button>
          <Button
            className="arrow-btn next"
            onClick={() => this.slider.slickNext()}
            ml='5'
            mb='2'
            p='1'
            borderRadius='50%'
            colorScheme='gray'
          >
            <ArrowRightIcon/>
          </Button>
        </Flex>
      );
    };
    render() {

      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <Box className="App">
          <Box w='100%' h='400px' pos='absolute' bgColor='cyan.300' opacity='0.1'>
          </Box>
          <Box style={{ position: "relative", margin: "2rem 0", padding: '1rem 5rem', overflow:'hidden' }}>
            <Flex justifyContent='space-between'>
              <Heading  as='h4' fontSize='25px'>Trending Today</Heading>
              {this.renderArrows()}
            </Flex>
            <Slider
            ref={c => (this.slider = c)}
            {...settings}
              
            >
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
              <Box>
                <Card data={carouselData}/>
              </Box>
            </Slider>
          </Box>
        </Box>
      );
    }
}


export default Carousel;