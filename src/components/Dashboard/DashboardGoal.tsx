import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card'

const DashboardGoal = () => {
  return (
    <Box>
         <Text fontSize="16px" fontWeight="700">Goals</Text>
         <Grid my="30px" templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap={["0","0","7"]} >
            <Card 
            heading="Weekly Target"
            achieved="25%"
            />
            <Card background="#51459E" 
             heading="Monthly Target"
             achieved="50%"
            />
         </Grid>
    </Box>
  )
}

export default DashboardGoal