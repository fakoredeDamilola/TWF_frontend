import { Box, Button, Circle, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ICloth } from '../../store/Clothes'


const ClothesItem = ({clothes}:{clothes:ICloth}) => {
  return (
    <Box width={["95%","95%","300px"]}  background="white" border="1px solid brand.primary" borderRadius="6px" mx="4px" my="10px" boxShadow="6px 3px 4px rgba(0,0,0,0.5)">
        <Box borderBottom="1px solid gray" pl="15px" py="10px" cursor="pointer">
            <Flex justifyContent="space-between">
              <Flex>
                 {clothes.style_image ? <Img src={clothes.style_image} borderRadius="50%" width="45px" height="45px" mt="7px" /> : <Circle size="45px" background="brand.primary" mt="12px" color="white">{clothes?.name.split("")[0]}</Circle>}
              <Box ml="4px">
                <Heading as="h3" size="24px" fontWeight="normal" margin="0" ml="6px" my="15px">{clothes?.name}</Heading>
    <Text color="gray.300"  fontSize="14px">{clothes?.description}</Text>
              </Box>
              </Flex>
             
    <Box padding="2px" width="80px" border="2px solid brand.primary" borderRadius="30px 0 0 30px" borderRight="0px" fontSize="12px" textAlign="center" pt="5px" h="34px" mt="15px">{clothes.status}</Box>
            </Flex>
            
        </Box>
        <Box py="15px" px="15px" fontSize="14px">
    <Flex justifyContent="space-between" my="2px">
      <Text>Start Date</Text>
      <Text>{new Date(clothes.start_date ?? "").toLocaleString()}</Text>
    </Flex>
    <Flex justifyContent="space-between" my="2px">
      <Text>End Date</Text>
      <Text>{new Date(clothes.end_date ?? "").toLocaleString()}</Text>
    </Flex>
    <Link to={`/dashboard/clothes/${clothes._id}`}><Button mt="20px" width="100%" borderRadius="6px" fontSize="14px">
      PROCEED TO COMPLETE <AiOutlineArrowRight style={{marginLeft:"10px"}}/>
    </Button></Link>
        </Box>
    </Box>
  )
}

export default ClothesItem