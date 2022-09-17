import { Box, Flex, Heading } from '@chakra-ui/react'
import { DashBoardTab } from '../../store/user'
import {MdSpaceDashboard} from 'react-icons/md'
import Logo from '../Logo'
import { Link, useLocation } from 'react-router-dom'

const SideNav = ({setShowNav}:{setShowNav:React.Dispatch<React.SetStateAction<boolean>>}) => {
const location = useLocation()
    const dashboardTabs = [
        {item:DashBoardTab.HOME,icon:<MdSpaceDashboard color={location.pathname === "/" ? "white" : "#425EBD"}/>, link:"/"},
        {item:DashBoardTab.DASHBOARD,icon:<MdSpaceDashboard color={location.pathname === "/dashboard" ? "white" : "#425EBD"}/>, link:"/dashboard"},
        {item:DashBoardTab.CLIENTS,icon:<MdSpaceDashboard color={location.pathname === "/dashboard/clients" ? "white" : "#425EBD"}/>, link:"/dashboard/clients"},
        {item:DashBoardTab.CLOTHES,icon:<MdSpaceDashboard color={location.pathname === "/dashboard/clothes" ? "white" : "#425EBD"}/> , link:"/dashboard/clothes"},
        {item:DashBoardTab.GALLERY,icon:<MdSpaceDashboard color={location.pathname === "/dashboard/gallery" ? "white" : "#425EBD"}/>, link:"/dashboard/gallery"},
        {item:DashBoardTab.PROFILE,icon:<MdSpaceDashboard color={location.pathname === "/dashboard/profile" ? "white" : "#425EBD"}/>, link:"/dashboard/profile"},
        {item:DashBoardTab.STORE,icon:<MdSpaceDashboard color={location.pathname === "/dashboard/store" ? "white" : "#425EBD"}/>, link:"/dashboard/store"},
        // {item:DashBoardTab.HELP,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/help"},

    ]
  return (
    <Box>

   <Box background="white" width="230px" height="100vh" position="fixed" overflowY="scroll">
        <Box padding="20px 18px">
            <Logo />
        </Box>
        <Box>
            <Heading as="h3" fontSize="20px" color="brand.primary" paddingTop="15px" margin="10px 8px">
            MENU
            </Heading>
            <Box mt="15px" mb="140px">
                {dashboardTabs.map((tab,index:number) => {
                return(
                    <Box key={index}  padding="13px 5px" margin="20px 0" _before={{
                        content:'""',
                        position: "absolute",
                        transition:"all 0.3s ease-in-out",
                        height: "55px",
                        borderRadius:"0px 30px 30px 0px",
                        marginTop:"-18px",
                        cursor:"pointer",
                        zIndex:"1",
                        backgroundColor:`${location.pathname === tab.link ? "#425EBD" : "transparent"}`,
                        width:`${location.pathname === tab.link ? "200px" : "0px"}`,
                        color:`${location.pathname === tab.link ? "white" : "#425EBD"}`,
                        boxShadow: `${location.pathname === tab.link ? "-7px -1px 28px 0px rgba(32,177,240,0.62)" : "none"}`,
                        }}
                        _hover={{
                            color:"white",
                            "::before":{
                                width:"200px",
                        border:"2px solid #425EBD",
                        // background:"#425EBD",
                        boxShadow:"-7px -1px 28px 0px rgba(32,177,240,0.62)",
                        color:"white",

                            }
                        }}
                        >
                    
                        <Link to={tab.link} >
                            <Flex  marginLeft="20px" alignItems="center" zIndex="999" position="relative" color={location.pathname === tab.link ? "white" : "#425EBD"} onClick={()=>setShowNav(false)}>
                         {tab.icon} <Box ml="12px" mt="-4px" >{tab.item}</Box>  
                    </Flex>
                        </Link>
                     
                    
                    </Box>
                    
                )
            })}
            </Box>
            
        </Box>
    </Box>
    </Box>
    
  )
}

export default SideNav