import { Box, Flex, Text } from '@chakra-ui/react'
import Mask1 from "../../assets/Mask1.svg"
import Mask2 from "../../assets/Mask2.svg"
import Mask3 from "../../assets/Mask3.svg"
import Mask4 from "../../assets/Mask4.svg"

const DashboardStatCard = ({item,value}:{item:string,value?:number|string}) => {
const maskArray = [Mask1, Mask2, Mask3,Mask4]
const Random = Math.floor(Math.random() * maskArray.length)
  return (
    <Flex width="260px" height="130px" borderRadius="10px" margin="20px 30px" background="#4F46BA"
    backgroundImage={`url(${maskArray[Random]})`}
    backgroundRepeat="no-repeat"
    backgroundPosition="right"
    padding="0 20px"
    mx="auto"
    cursor="pointer"
    >
       <Box height="80%" marginTop="20px">
         <Text color="#FFF" opacity="0.5" fontWeight="700">{item}</Text> 
       <Text color="white" mt="10px" fontSize="26px">{value}</Text>
       </Box>
     
    </Flex>
  )
}

export default DashboardStatCard