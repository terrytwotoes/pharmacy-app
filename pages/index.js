import { Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import TopBrand from '../components/topBrand'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <TopBrand/>
      <Carousel/>
      <Footer/>
    </>
  )
}
