
import { useMutation } from '@apollo/client'
import { Box, Table, Th, Tr, Thead, Tbody, Td, useMediaQuery, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { PencilIcon,DeleteIcon } from '../../assets/Icons'
import { IMaterial } from '../../store/Clothes'
import { TrxState } from '../../store/modals'
import { DELETE_MATERIAL, GET_CLOTH } from '../Dashboard/dashboardApiCalls'
import TransactionStateModal from '../modals/ModalInfo'
import MaterialItem from './MaterialItem'

const MaterialList = ({materials,clothID,clickEditButton}:{materials:IMaterial[],clothID:string,clickEditButton:(material:IMaterial) => void}) => {
  
  const [mobile] = useMediaQuery("(min-width: 500px)")
  const [openModal,setOpenModal] = useState(false)
  const [deleteItem,setDeleteItem] = useState<any>({})
  const [deleteMaterialItem] = useMutation(DELETE_MATERIAL,{
    variables:{
      input:{
        cloth_id:clothID,
        material_id:deleteItem.id,
        name:deleteItem.name
      }
    },
    refetchQueries:[
      {query:GET_CLOTH,variables:{id:clothID}}
    ]

  })
  return (
   <Box>
    {!mobile? (
      <Box>
        {materials.map((material,index) => ( 
           <Box  key={index} 
        width="90%" my="20px" mx="auto"  background="white" borderRadius="6px" boxShadow="-4px -5px 23px 0px rgba(225,224,240,0.75)">
        <Flex justifyContent="center" flexDirection="column" alignItems="center" position="relative">
            
        </Flex>
       
        <Box px="10px" pt="30px" pb="20px" >
        <Flex my="10px" justifyContent="space-between">
        <Text>Name</Text>
        <Text fontWeight="800">{material.name}</Text>
        </Flex>
        <Flex my="10px" justifyContent="space-between">
        <Text>Price</Text>
        <Text fontWeight="800">N {material.price}</Text>
        </Flex>
        <Flex my="10px" justifyContent="space-between">
        <Text>Quantity</Text>
        <Text fontWeight="800">{material.quantity}</Text>
        </Flex>
        
        
        </Box>
        <Flex justifyContent="space-between" background="#c6c3c3" alignItems="center" padding="10px" >
        <PencilIcon click={() =>clickEditButton({
            description:material.description,
            id: material.id,
            name: material.name,
            price: material.price,
            quantity: material.quantity            
          })}/>
        <DeleteIcon   click={()=>{
          setOpenModal(true)
          setDeleteItem(material)
        }}/>
        </Flex>
        
    </Box>
    ))}
      </Box>
    ): (
      <Box overflowX="auto">
      <Table variant='simple' w="60%" mx="auto">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th/>
          </Tr>
        </Thead>
        <Tbody>
   {materials.map((material,index) => <MaterialItem 
   clickEditButton={clickEditButton}
   setDeleteItem={setDeleteItem}
   setOpenModal={setOpenModal}
    key={index} clothID={clothID} material={material}/>)}
  
   <Tr mt="20px" bg="brand.primary" color="white">
          <Td>Workmanship</Td>
          <Td>--</Td>
          <Td>--</Td>
          <Td>---</Td>
          <Td>$6,000</Td>
        </Tr>
      </Tbody>
      </Table>
      </Box>
    )
  }
  <TransactionStateModal
      open={openModal} 
      type={TrxState.WaitingForConfirmation}
      close={()=>setOpenModal(false)}
       click ={()=>{
        setOpenModal(false)
       deleteMaterialItem()
      }} />
   </Box>
   
  )
}

export default MaterialList