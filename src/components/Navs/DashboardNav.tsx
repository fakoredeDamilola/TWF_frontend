import { Box, Flex, Input, InputGroup, InputLeftElement, useMediaQuery } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { MessageIcon, NotificationIcon, SearchIcon } from '../../assets/Icons'
import { RootState } from '../../store/store'
import {useState,useEffect} from 'react'
import useDebounce from '../../utils/hooks/useDebounce'
import ProfileTab from '../user/ProfileTab'
import { setSearch } from '../../store/client'


const DashboardNav = ({mobile,setShowNav}:{mobile:boolean,setShowNav: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const dispatch = useDispatch()

  const userInfo = useSelector((state:RootState)=>state.user.user)
  const [searchQuery, setSearchQuery] = useState<string>("");

  const logOut = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
    window.location.reload()
  }
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(setSearch({search: debouncedQuery }));
    }
  }, [debouncedQuery]);
  
  return (
    <>
    <Flex borderBottom="2px solid #F5F5F5" bg="white"
    width="100%"
    position="fixed"
    zIndex="999"
    flexDirection="column"
  
    >
     
    <Flex>
       {!mobile &&
          <Box 
          padding="0 10px"
          marginTop="15px"
          onClick={(e)=> setShowNav((showNav) =>!showNav)}>
            <GiHamburgerMenu size="20px"/>
          </Box>
          }
        <Flex padding="5px 7px" width="100%" alignItems="center">
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon  />}
    />
    <Input type='tel' placeholder='Search for a client' border="0" />
  </InputGroup>
  <NotificationIcon click={()=>{}} maL="2px" width={!mobile ? "20px": "25px"}/>
  <MessageIcon maL="2px" width={!mobile ? "20px": "25px"}/>
        </Flex>
  
   {mobile && <Box width={["30px","30px","300px"]} padding="5px 7px" borderLeft="2px solid #F5F5F5">
        <ProfileTab user={userInfo} logOut={logOut}/>
    </Box>}
  
    </Flex>
    </Flex>
    </>
  )
}

export default DashboardNav