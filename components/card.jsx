import { Badge, Box, Center, Text  } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image'
import card from "../public/card.jpg"
import Link from 'next/link';




const Card = (props) => {

  const { price, currency, name, description, quantity, imageUrl, discount} = props.data;
  
  const discountCalc = (price,discount) => {
    return price-(price*discount/100)
  }

  return (
    <Link href='/cart'>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' width='300px' bg='white' cursor='pointer' >
        <Badge px='2' colorScheme='teal' left='5px'pos='relative'>
          {discount}% off
        </Badge>
        <Center w='100%' h='auto' overflow='hidden'>
          <Image src={card} alt={name}/>
        </Center>
    <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
      <Box display='flex' alignItems='baseline' fontSize='md'>
          {name}
        </Box>
        <Box fontSize='sm' fontWeight='normal'>
          {description}
        </Box>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          mt='1'
        >
          <Text>MRP<span style={{textDecoration:'line-through'}}> &#8377;{price}</span></Text>         
        </Box>
        <Box
          fontWeight='bold'
          letterSpacing='wide'
          fontSize='md'
          textTransform='uppercase'
          mt='1.5'
        >
          {discountCalc(price,discount)}
        </Box>
      </Box>

    </Box>
  </Box>
    </Link>
  )
};

export default Card;
