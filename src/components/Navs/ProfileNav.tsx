import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { DashBoardTab } from '../../store/user'
import {MdSpaceDashboard} from 'react-icons/md'
import Logo from '../Logo'
import { Link, useLocation } from 'react-router-dom'

const ProfileNav = () => {
const location = useLocation()
const [mobile] = useMediaQuery("(min-width: 500px)")
    const dashboardTabs = [
        {item:DashBoardTab.CLIENTS,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/clients"},
        {item:DashBoardTab.CLOTHES,icon:<MdSpaceDashboard color="white"/> , link:"/dashboard/clothes"},
        {item:DashBoardTab.GALLERY,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/gallery"},
        {item:DashBoardTab.STUDENTS,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/students"},
        {item:DashBoardTab.PROFILE,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/profile"},
        {item:DashBoardTab.HELP,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard/help"},
        {item:DashBoardTab.DASHBOARD,icon:<MdSpaceDashboard color="white"/>, link:"/dashboard"},

    ]
  return (
    <Box>

   <Box background="blue" width="230px" height="100vh" position="fixed">
        <Box padding="20px 18px">
            <Logo />
        </Box>
        <Box>
            <Heading as="h3" fontSize="20px" color="white" paddingTop="15px" margin="10px 8px">
            MENU
            </Heading>
            <Box mt="15px">
                {dashboardTabs.map((tab,index:number) => {
                return(
                    <Box key={index} padding="13px 5px" margin="20px 0" _before={{
                        content:'""',
                        position: "absolute",
                        width: "0px",
                        transition:"all 0.3s ease-in-out",
                        height: "55px",
                        borderRadius:"0px 30px 30px 0px",
                        marginTop:"-18px",
                        cursor:"pointer",
                        zIndex:"1",
                        }}
                        _hover={{
                            "::before":{
                                width:"200px",
                                color:"white",
                        border:"2px solid rgba(32,177,240,1)",
                        boxShadow: "-7px -1px 38px 0px rgba(32,177,240,0.62)"

                            }
                        }}
                        backgroundColor={location.pathname === tab.link ? "#0D265E" : "transparent"}
                        >
                    
                        <Link to={tab.link} >
                            <Flex  marginLeft="20px" alignItems="center" zIndex="999" position="relative">
                         {tab.icon} <Box ml="12px" mt="-4px" color="white">{tab.item}</Box>  
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

export default ProfileNav