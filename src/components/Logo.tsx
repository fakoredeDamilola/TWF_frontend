import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Flex
    background="rgba(255, 255, 255, 0.29)"
    borderRadius="16px"
    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
    backdropFilter="blur(5.9px)"
    border="1px solid rgba(255, 255, 255, 0.65)"
    width="60px"
    height="60px"
    justifyContent="center"
    alignItems="center"
    zIndex="-1"
    cursor="pointer"
  
    >
       <Link to="/"><Box maxWidth="40px" minHeight="40px" background="brand.primary" zIndex="1" borderRadius="50%"></Box></Link> 
    </Flex>
  )
}

export default Logo