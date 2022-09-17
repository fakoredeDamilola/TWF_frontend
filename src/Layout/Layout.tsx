import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashboardNav from '../components/Navs/DashboardNav'
import MainNav from '../components/Navs/MainNav'
import SideNav from '../components/Navs/SideNav'
import Spinner from '../components/Spinner'

interface IProps {
    children: React.ReactNode
}

const Layout = ({children}:IProps) => {
    
    const noSideNav = ["login","register","/forgot-password","/reset-password","/","signup","store"]
    const location = useLocation();
    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);
  
    const [mobile] = useMediaQuery("(min-width: 500px)")
    const checkSideNav = !noSideNav.includes(location.pathname.split("/")[1]) && location.pathname!=="/"
      const [showNav,setShowNav] = useState(false)
      console.log({location})
  return (
    <>
      <Spinner />
    <Flex flexDirection={checkSideNav ? "row":"column"} >
      
      { checkSideNav  ? 
        <Flex gap="40px">
          
          <Box width="230px" display={!mobile && !showNav ? "none" :"block"}>  
            <SideNav setShowNav={setShowNav}/>

          </Box>
          
          
          <DashboardNav 
          mobile={mobile}
          setShowNav={setShowNav}
          /> 
        </Flex> : <MainNav />
    
    }      
          <Box flexGrow="1" mt={checkSideNav ? "100px":"0"}>
          {children}
          </Box>      
        
        </Flex>
    </>
    
      
  )
}

export default Layout