import { Box, Text, Heading, Flex, Center, Divider } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import dabur from '../public/dabur.jpg'
import dettol from '../public/dettol.jpg'
import novaherbs from '../public/novaherbs.jpg'
import accucheck from '../public/accu-chek.jpg'
import himalaya from '../public/himalaya.jpg'


const TopBrand = () => {
    const brandStyling = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius:'10px',
        padding:'2rem',
        cursor:'pointer',
        "&:hover": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
        }
    }

  return (
    <Box mt='20' px='20'>
        <Heading as='h4' fontSize='25px' >Top brands</Heading>
        <Flex mt='8' justifyContent='space-evenly' mb='20'>
            <Box style={brandStyling}  >
                <Center mb='10px' >
                    <Image src={dabur} alt='dabur-logo' />
                </Center>
                <Divider/>
                <Text textAlign='center' mt='2'>Dabur</Text>
            </Box>

            <Box style={brandStyling}  >
                <Center mb='10px' >
                    <Image src={novaherbs} alt='novaherbs-logo' />
                </Center>
                <Divider/>
                <Text textAlign='center' mt='2'>Novaherbs</Text>
            </Box>

            <Box style={brandStyling}  >
                <Center mb='10px' >
                    <Image src={dettol} alt='dettol-logo' />
                </Center>
                <Divider/>
                <Text textAlign='center' mt='2'>Dettol</Text>
            </Box>

            <Box style={brandStyling}  >
                <Center mb='10px' >
                    <Image src={accucheck} alt='accucheck-logo' />
                </Center>
                <Divider/>
                <Text textAlign='center' mt='2'>Accucheck</Text>
            </Box>

            <Box style={brandStyling}  >
                <Center mb='10px' >
                    <Image src={himalaya} alt='himalaya-logo' />
                </Center>
                <Divider/>
                <Text textAlign='center' mt='2'>Himalaya</Text>
            </Box>
        </Flex>
    </Box>
  )
};

export default TopBrand;
