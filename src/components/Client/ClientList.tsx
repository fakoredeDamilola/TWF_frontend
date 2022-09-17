import { Box, Button, Circle, Flex, Table,TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useMediaQuery } from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IClient, setCustomer, setPageNumber } from '../../store/client'
import { MiniClientImage } from '../MiniComponents'
import Pagination from '../Pagination'
import ClientItem from './ClientItem'

interface IClientList {
  clientList:IClient[],
  total:number,
  recordPerPage:number,
  pageNumber:number
}

const ClientList = ({clientList,total,recordPerPage,pageNumber}:IClientList) => {
const dispatch = useDispatch()

  const [mobile] = useMediaQuery("(min-width: 500px)")

 const setClientData = (client:IClient)=> {
  dispatch(setCustomer({client}))
  }
  return ( 
    <Box>
  
{mobile ?    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
      <Th>Picture</Th>
        <Th>Name</Th>
        <Th>Phone</Th>
        <Th>Projects</Th>
        <Th>Details</Th>
      </Tr>
    </Thead>
    <Tbody>
        {clientList?.map((client:IClient,index:number) => (
        <ClientItem key={index} client={client} setClientData={setClientData}/>
    ))}
    </Tbody>
  </Table>
  <Pagination
        pageSize={recordPerPage}
        currentPage={pageNumber}
        siblingCount={1}
        totalCount={total}
        onPageChange={(page) => {
          dispatch(setPageNumber({ pageNumber: page }));
        }}
      />
            </TableContainer> :
          <Box>
            {clientList?.map((client:IClient,index:number)=> {
              return (
                <Box width="90%" my="50px" mx="auto"  key={index} background="white" borderRadius="6px" boxShadow="-15px -5px 23px 0px rgba(225,224,240,0.75)">
        <Flex justifyContent="center" flexDirection="column" alignItems="center" position="relative">
            <MiniClientImage client={client}/>
            
        </Flex>
       
        <Box px="10px" pt="40px" pb="20px" >
        <Flex my="10px" justifyContent="space-between">
        <Text>Name</Text>
        <Text fontWeight="800">{client.name}</Text>
        </Flex>
        <Flex my="10px" justifyContent="space-between">
        <Text>Phone</Text>
        <Text fontWeight="800">{client.phone}</Text>
        </Flex>
        <Flex my="10px" justifyContent="space-between">
        <Text>Clothes</Text>
        <Text fontWeight="800">{client.clothes.length}</Text>
        </Flex>
        
        </Box>
        <Link to={`/dashboard/client/${client._id}`}  onClick={()=>setClientData(client)}>
        <Flex justifyContent="flex-end" background="#b0b0b0" alignItems="center" padding="4px">
      <MdKeyboardArrowRight fontSize="30px" color="#3836CD"/>
    </Flex>
        </Link>
        
    </Box>
              )
            })

            }
             <Pagination
        pageSize={recordPerPage}
        currentPage={pageNumber}
        siblingCount={1}
        totalCount={total}
        onPageChange={(page) => {
          dispatch(setPageNumber({ pageNumber: page }));
        }}
      />
          </Box>

}
    </Box>
    
  )
}

export default ClientList