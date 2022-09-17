import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PencilIcon } from '../assets/Icons'

const TagContainer = ({text}:{text:string}) => {
  return (
    <Flex padding="3px 8px" borderRadius="40px" border="1px solid black " width="100px" fontSize="14px"><Text mr="15px">{text}</Text> <Box mt="0px"><PencilIcon width='["15px","15px","17px"]' /></Box></Flex>
  )
}

export default TagContainer