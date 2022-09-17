import React from 'react';
import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  useColorModeValue,
  Text,
  Link,
  Collapse,
  useMediaQuery,
  MenuItem,
  List,
  ListItem,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import useToggle from '../../utils/hooks/useToggle';
import { navList } from '../../constants/routes';
import { chakra } from "@chakra-ui/react"
import { MdOutlineShoppingCart, MdSearch } from 'react-icons/md';
import { GiStack } from 'react-icons/gi';
import { IUser, UsersEnum } from '../../store/user';

export default function MobileNavDrawer({user}:{user:IUser}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOn, toggleIsOn] = useToggle();
  const HamburgerIconBorderColor = useColorModeValue('#DEE5ED', '#213345');
  const HamburgerIconColor = useColorModeValue('#333333', '#F1F5F8');
  const SwapBgColor = useColorModeValue('#F2F5F8', '#213345');
  const closeButtonBorder = useColorModeValue('#666666', '#DCE5EF');
  const [isMobileDevice] = useMediaQuery('(max-width: 750px)');


  return (
    <>
      <Flex
        border="1px"
        borderColor={HamburgerIconBorderColor}
        alignItems="center"
        borderRadius="6px"
        w="40px"
        h="40px"
        justifyContent="center"
        p="18px"
      >
        <HamburgerIcon
          color={HamburgerIconColor}
          onClick={onOpen}
          cursor={'pointer'}
          w="24px"
          h="24px"
        />
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mt={5}>
            <Flex
              onClick={onClose}
              alignItems="center"
              cursor="pointer"
              justifyContent="center"
              borderRadius="6px"
              w="24px"
              h="24px"
              border="1px"
              borderColor={closeButtonBorder}
            >
              <CloseIcon />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex ml={-6}>
              <Flex flexDirection="column">
                <Text ml={6} color="#999999" fontSize="12px" mb={2}>
                  MENU
                </Text>
                <List display="flex" justifyContent="space-between" flexDirection="column">
           {navList.map((item,index) => (
                <ListItem cursor="pointer" color="#000"
                fontSize="16px"
                lineHeight="22px"
                fontWeight="600" key={index} m="10px 20px" >
                    <NavLink to={item.split(" ").join("-").toLowerCase()}>
                       <chakra.span
                       position="relative"
                       display="block"
                       color={window.location.pathname === `/${item.split(" ").join("-").toLowerCase()}` ? "#000" : "#000"}
                       _before={{
                            content:'""',
                            position: "absolute",
                            // transition:"all 0.3s ease-in-out",
                            width: "0%",
                            height:"1px",
                            left:"-2.5px",
                            top:"55%",
                            marginTop:"-0.2px",
                            backgroundColor:"#fff"
                       }}
                       _after={{
                        content:'""',
                        position: "absolute",
                        transition:"width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)",
                        right:"2.5px",
                        width: "0%",
                        height:"1px",
                        top:"55%",
                        marginTop:"-0.2px",
                        backgroundColor:"#fff"
                   }}
                   _hover={{
                    "::before":{
                        background:"#000",
                        width:"80px",
                        transition:"width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
                    },
                    "::after":{
                        background:"transparent",
                        width:"80px",
                        transition:"0s"
                    },
                   }}

                       >{item}</chakra.span> 
                    </NavLink>
                </ListItem>
           ))}
              {user?.type===UsersEnum.TAILOR &&   <ListItem cursor="pointer" color="#000"
                fontSize="14px"
                lineHeight="22px"
                fontWeight="600" mx="20px" >
                    <Link href="/dashboard">
                       <chakra.span
                       position="relative"
                       display="block"
                       color={window.location.pathname === "/dashboard" ? "#000" : "#000"}
                       _before={{
                            content:'""',
                            position: "absolute",
                            // transition:"all 0.3s ease-in-out",
                            width: "0%",
                            height:"1px",
                            left:"-2.5px",
                            top:"55%",
                            marginTop:"-0.2px",
                            backgroundColor:"#fff"
                       }}
                       _after={{
                        content:'""',
                        position: "absolute",
                        transition:"width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)",
                        right:"2.5px",
                        width: "0%",
                        height:"1px",
                        top:"55%",
                        marginTop:"-0.2px",
                        backgroundColor:"#fff"
                   }}
                   _hover={{
                    "::before":{
                        background:"#000",
                        width:"100%",
                        transition:"width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
                    },
                    "::after":{
                        background:"transparent",
                        width:"100%",
                        transition:"0s"
                    },
                   }}

                       >Dashboard</chakra.span> 
                    </Link>
                </ListItem>}
            
        </List>
        <List display="flex" justifyContent="space-between" mt="20px">
        <ListItem mx="20px">
                <MdOutlineShoppingCart fontSize="24px"/>
            </ListItem>
            <ListItem mx="20px">
                <MdSearch fontSize="24px"/>
            </ListItem>
            <ListItem mx="20px">
                <GiStack fontSize="24px"/>
            </ListItem>
        </List>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
