import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

interface IPercentageDropdown {
    values:string[],
    selectedValue:string,
    setSelectedValue:React.Dispatch<React.SetStateAction<number>>
}

const PercentageDropdown = ({values,selectedValue,setSelectedValue}:IPercentageDropdown) => {
  return (
    <Box>
        <Menu>
  <MenuButton
    px={4}
    py={2}

    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  >
    {selectedValue} <ChevronDownIcon />
  </MenuButton>
  <MenuList>
     {values.map((val,index)=>(
    <MenuItem key={index} onClick={()=>setSelectedValue(parseInt(val.split('%')[0]))}>{val}</MenuItem>  
  ))}
  </MenuList>
 
</Menu>
    </Box>
  )
}

export default PercentageDropdown