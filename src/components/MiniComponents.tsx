import { Box, Circle, Img, Text } from "@chakra-ui/react"
import { AiOutlinePlus } from "react-icons/ai"
import  { IClient } from "../store/client"


export const FixedAddButton = ({onClick,title}:{onClick:() => void,title?:string}) => {
  return (
    <Box title={title ?? "add customer"} position="fixed" bottom="40px" right="30px">
        
    <Circle size="50px" background="brand.primary" onClick={onClick} cursor="pointer">
      <AiOutlinePlus color="white" fontWeight="700" fontSize="20px"/> 
    </Circle>
    </Box>
  )
}


export const MiniClientImage = ({client}:{client:IClient}) => {
  return (
    <Circle size="80px" top="-40px" background="brand.primary" mt="12px" position="absolute"
    zIndex="999"
             border="6px solid white" color="white"
             ><Text fontSize="18px">{client.image ?<Img src={client.image} width="80px" borderRadius="50%"/> : client.name.split("")[0].toUpperCase() }</Text></Circle>
  )
}