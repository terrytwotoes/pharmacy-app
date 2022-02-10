import React, { Component } from "react";
import Slider from "react-slick";
import heroimg from "../public/heroimg1.jpg"
import heroimg2 from "../public/heroimg2.jpg"
import Image from "next/image";
import { Box } from "@chakra-ui/react";

class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      appendDots: dots => (
          <ul style={{ margin: "5px" }}> {dots} </ul>
      ),
    };
    return (
      <Box w='100%'>
        <Slider {...settings}>
          <Box>
            <Image src={heroimg} alt='offer banner' />
          </Box>
          <Box>
             <Image src={heroimg2} alt='offer banner' />
          </Box>
          <Box>
             <Image src={heroimg} alt='offer banner' />
          </Box>
          <Box>
             <Image src={heroimg2} alt='offer banner' />
          </Box>
          <Box>
            <Image src={heroimg} alt='offer banner' />
          </Box>
          <Box>
            <Image src={heroimg2} alt='offer banner' />
          </Box>
        </Slider>
      </Box>
    );
  }
}

export default Hero;