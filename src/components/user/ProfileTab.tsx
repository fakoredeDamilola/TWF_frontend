import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Circle, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react'
import { Dropdown } from '../../assets/Icons'
import { IUser } from '../../store/user'


const ProfileTab = ({user,logOut}:{user:IUser,logOut:() => void}) => {
  const [mobile] = useMediaQuery("(min-width: 500px)")
  return (
    <Flex  padding="8px 5px">
        <Circle size="45px" background="blue" color="white">
        {user.profileImage ?? user.name[0].toUpperCase()}
          </Circle>
      {mobile &&  <Flex padding="0px 5px" margin="0px 8px">
          <Box>
        <Heading as="h3" fontSize="16px" fontWeight="700" color="#333333" >
    {user.name.split(" ")[0]}
            </Heading>
            <Text color="gray.600" mt="4px">$13.12</Text>
        </Box>
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<ChevronDownIcon />}
    background="transparent"
    ml="10px"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} onClick={()=>logOut()}>
      Log out
    </MenuItem>
  </MenuList>
</Menu>
        </Flex>}
        
    </Flex>
  )
}

export default ProfileTab