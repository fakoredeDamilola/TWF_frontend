import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const EmptyListPage = ({value}:{value?:string}) => {
  return (
    <Flex>
        <Box>
            <Text>Create a new {value ?? "you"}</Text>
        </Box>
    </Flex>
  )
}

export default EmptyListPage