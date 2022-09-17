import { Box, Circle, Flex, Img, Td, Tr } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IClient } from '../../store/client'
import { MiniClientImage } from '../MiniComponents'


const ClientItem = ({client,setClientData}:{client:IClient,setClientData:(client:IClient)=>void}) => {
  return (
            <Tr background="white" margin="20px 0" cursor="pointer">
        <Td>{client.image ? <Img 
        src={client.image}         
        borderRadius="50%" 
        objectFit="contain"
        width="50px"
        height="50px"
        /> : <Circle size="50px" background="brand.primary" color="white">{client.name.split("")[0].toUpperCase()}</Circle>}
        <MiniClientImage client={client}/>
        </Td>
        <Td mt="10px" >{client.name}</Td>
        <Td mt="10px">{client.phone}</Td>
        <Td  mt="10px">{client.clothes?.length}</Td>
        <Td>
        <Flex justifyContent="center" alignItems="center" width="40px" height="40px" border="2px solid #3836CD" borderRadius="50%"
        >

<Link to={`/dashboard/client/${client._id}`} onClick={()=>setClientData(client)}><MdKeyboardArrowRight fontSize="30px" color="#3836CD"/></Link>
    </Flex>
        </Td>
      </Tr>
  )
}

export default ClientItem