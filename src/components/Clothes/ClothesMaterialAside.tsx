import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import PercentageDropdown from '../PercentageDropdown'

const ClothesMaterialAside = ({total,charge}:{total:number,charge:number}) => {

    const [profitPercentValue,setProfitPercentValue] = useState(0)
    const profitArray =[10,20,30,]
  return (
    <Box width={["100%","100%","300px"]} padding="15px" boxSizing='border-box' marginLeft={[0,0,"30px"]} my={["20px","20px",0]} background="white" borderRadius="6px">
    <Heading as="h2" size="lg" fontWeight="600" mt="8px">Total</Heading>
    {/* <Flex my="10px" justifyContent="space-between">
      <Text display="flex" mt="10px">Profit <BsInfoCircle style={{marginTop:"4px",marginLeft:"7px"}}/></Text>
       <PercentageDropdown 
       values={profitArray.map(val=>`${val}%`)} 
       setSelectedValue={setProfitPercentValue}
        selectedValue={`${profitPercentValue}%`}
       />
    </Flex> */}
    <Flex my="15px" justifyContent="space-between">
      <Text display="flex" mt="10px">Charge<BsInfoCircle style={{marginTop:"4px",marginLeft:"7px"}}/></Text>
       <Text fontSize="25px" fontWeight="500">{charge}</Text>
    </Flex>
    
   <Box my="10px" textAlign="center">
   <Text display="flex" mt="10px" fontWeight="400" justifyContent="center">Total<BsInfoCircle style={{marginTop:"4px",marginLeft:"7px"}}/></Text>
   <Text mt="8px" fontSize="35px" fontWeight="900">{total+charge}</Text>
   </Box>
    </Box>
  )
}

export default ClothesMaterialAside