import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const HyperLink = ({links}:{links?:string[]}) => {
  return (
    <Flex>
        {links && links.map((link,index) => <Box key={index} marginLeft="5px" cursor="pointer" _hover={{color:"blue",textDecoration:"underline"}}>{link} /</Box>)}
    </Flex>
  )
}

export default HyperLink