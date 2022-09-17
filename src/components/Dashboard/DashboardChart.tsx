import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Charts from '../chart/Charts'

const data = [
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "June",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "July",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Sept",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Nov",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Dec",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

const DashboardChart = ({mobile}:{mobile:boolean}) => {
  return (
    <Box  width="100%">
          <Text fontSize="16px" fontWeight="700">Analytics</Text>
          {/* <Flex justifyContent="space=between"> */}
{mobile && <Box background="white" padding="20px" my="30px" borderRadius="20px" boxShadow= '0px 4px 10px rgba(0, 0, 0, 0.5)'>
        <Flex justifyContent="space-between" mb="10px">
          <Text fontSize="16px" fontWeight="700">Monthly Stat</Text>
          <Menu>
  <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />} backgroundColor="transparent" mt="-8px">
    Clients
  </MenuButton>
  <MenuList>
    <MenuItem>Clients</MenuItem>
    <MenuItem>Clothes</MenuItem>
    <MenuItem>Student</MenuItem>
    <MenuItem>Sales</MenuItem>
  </MenuList>
</Menu>
        </Flex>  
           <Charts data={data} type="line" /> 
        </Box>}
        {!mobile && <Box background="white" padding="20px" my="30px" borderRadius="20px" boxShadow= '0px 4px 10px rgba(0, 0, 0, 0.5)'>
        <Flex mb="10px" justifyContent="space-between">
          <Text fontSize="16px" fontWeight="700">Monthly Stat</Text>
          <Menu>
  <MenuButton as={Button} rightIcon={<RiArrowDropDownLine />} backgroundColor="transparent" mt="-8px">
    Clients
  </MenuButton>
  <MenuList>
    <MenuItem>Clients</MenuItem>
    <MenuItem>Clothes</MenuItem>
    <MenuItem>Student</MenuItem>
    <MenuItem>Sales</MenuItem>
  </MenuList>
</Menu>
        </Flex>  
           <Charts data={data.map(data=>{
            return {
              name:data.name,
              value:data.amt
            }
           })} type="pie" /> 
        </Box>}
          {/* </Flex> */}
        
        
    </Box>
  )
}

export default DashboardChart