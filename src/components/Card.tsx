import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import RadialChart from './chart/RadialChart'

const Card = ({background,heading,achieved}:{background?:string,heading?:string,achieved?:string}) => {
  return (
    <Flex borderRadius="10px" h="130px" w="100%" bg={background ? background:"white"} boxSizing="border-box" color={background ? "white":"#4D4A81"} boxShadow={!background ?"0px 4px 10px rgba(0, 0, 0, 0.5)":""} padding="30px" justifyContent="space-between" my="15px">
      <Box>
        <h3>{heading}</h3>
      <Text>{achieved}</Text>
      </Box>
      <Divider orientation='vertical' />
      <RadialChart />
      <Box>

      </Box>
    </Flex>
  )
}

export default Card