import React, { useState } from 'react';
import logo from '../public/logo.png'
import cart from '../public/cart.png'
import Image from 'next/image'
import { 
    Flex,
    Center,
    Grid,
    GridItem,
    Button,
    Text,
    Divider,
    Input,
    IconButton,
    Spacer,     
    Box,
    Link, 
    SimpleGrid
 } from '@chakra-ui/react'
import { TriangleDownIcon, Search2Icon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from "next/link"

const Navbar = () => {
    const [toggleNav,setToggleNav] = useState(false);

    const handleClick = () => {
        setToggleNav(!toggleNav)
    }

  return (
  <Flex py={4} px={20} bg="#76E4F7">
    <Center cursor='pointer'>
        <Image src={logo} alt="logo" height='30px' width='30px'/>
        <Text fontWeight='bold' fontSize='2xl' ml='1'>PA</Text>
    </Center>
    <Spacer/>
    <Grid templateColumns='repeat(3, 1fr)' width='50%' bg='#FFF5F7' borderRadius={10}>
        <GridItem colSpan={1}>
            <Flex direction='row'>
                <Button variant='ghost'>
                    <Center>
                        <Text fontWeight='medium' colorScheme="gray.400">Enter your pincode</Text>
                        <TriangleDownIcon ml={3} mt={1}/>    
                    </Center>
                </Button>
                <Box height='24px' fontWeight='bold'>
                    <Divider orientation='vertical' borderColor="#76E4F7" m={2.5}/>
                </Box>
            </Flex>
        </GridItem >
        <GridItem colSpan={2}>
            <Box>
            <Input placeholder='Search for medicines...' width='90%' _placeholder={{color:'black'}}  border='none'></Input>
            <IconButton icon={<Search2Icon/>} bg='none'/>
            </Box>
        </GridItem>
        {/* <GridItem colSpan={1}>
        </GridItem> */}
    </Grid>
    <Spacer/>
    <Center>
        <SimpleGrid columns={3} spacing={5}>
            <NextLink href='/login' passHref   >
                <Center>
                <Link _hover='none'>Login</Link>
                </Center>
            </NextLink>
            <NextLink href='/signup' passHref>
                <Center>
                <Link _hover='none'>Sign Up</Link>
                </Center>
            </NextLink>
            <NextLink href='/cart' passHref >
                <Center p='2'>    
                    <Link _hover='none'><Image src={cart} alt='cart' width='20px' height='20px'/>Cart</Link>
                </Center>
            </NextLink>
        </SimpleGrid>
    </Center>
      
  </Flex>
  )
};

export default Navbar;
