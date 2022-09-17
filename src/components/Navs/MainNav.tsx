import { useQuery } from '@apollo/client'
import { Box, Flex, List, ListItem, useMediaQuery } from '@chakra-ui/react'
import { chakra } from "@chakra-ui/react"
import { useState } from 'react'
import { GiStack } from 'react-icons/gi'
import { MdOutlineShoppingCart, MdSearch } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NotificationIcon } from '../../assets/Icons'
import { navList } from '../../constants/routes'
import { RootState } from '../../store/store'
import { UsersEnum } from '../../store/user'
import { GET_NOTIFICATIONS } from '../Dashboard/dashboardApiCalls'
import Logo from '../Logo'
import MiniNotification from '../Notifications/MiniNotification'
import MobileNavDrawer from './MobileNavDrawer'

const MainNav = () => {
    const [mobile] = useMediaQuery("(min-width: 500px)")
    const user = useSelector((state:RootState)=>state.user.user)
    const [openNotification,setOpenNotification] = useState(false)
    const closeNotification = () =>{
        setOpenNotification(false)
    }
  
    
  return (
    <Flex padding="7px 20px" bg="white" justifyContent="space-between">
        <Box>
         <Logo />
      </Box>
      <Flex  alignItems="center">
       
       {mobile ? <Flex>
        <List display="flex" justifyContent="space-between" flexDirection={["column","column","row"]}>
           {navList.map((item,index) => (
                <ListItem cursor="pointer" color="#000"
                fontSize="14px"
                lineHeight="22px"
                fontWeight="600" key={index} mx="20px" >
                    <Link to={item.split(" ").join("-").toLowerCase()}>
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
                        width:"100%",
                        transition:"width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
                    },
                    "::after":{
                        background:"transparent",
                        width:"100%",
                        transition:"0s"
                    },
                   }}

                       >{item}</chakra.span> 
                    </Link>
                </ListItem>
           ))}
           {user?.type===UsersEnum.TAILOR &&   <ListItem cursor="pointer" color="#000"
                fontSize="14px"
                lineHeight="22px"
                fontWeight="600" mx="20px" >
                    <Link to="/dashboard">
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
            <ListItem mx="20px">
                <MdSearch fontSize="24px"/>
            </ListItem>
          {user._id?  
          <>
           <ListItem mx="20px">
                <MdOutlineShoppingCart fontSize="24px"/>
            </ListItem>
            <ListItem mx="20px">
                <NotificationIcon click={()=>setOpenNotification(true)} width="24px" />
            </ListItem>
          </>
         : ["login","signup"].map((item,index)=>(
            <ListItem cursor="pointer" color="#000"
                fontSize="14px"
                lineHeight="22px"
                fontWeight="600" key={index} mx="20px" >
                    <Link to={item.split(" ").join("-").toLowerCase()}>
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
                        width:"100%",
                        transition:"width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)"
                    },
                    "::after":{
                        background:"transparent",
                        width:"100%",
                        transition:"0s"
                    },
                   }}

                       >{item}</chakra.span> 
                    </Link>
                </ListItem>
         ))
        }
        </List>
       </Flex> :<MobileNavDrawer user={user}/>}
      </Flex>
       <MiniNotification
        onClose={closeNotification}
        isOpen={openNotification}
       />
    </Flex>
   
  )
}

export default MainNav