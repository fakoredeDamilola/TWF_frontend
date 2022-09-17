import { useMutation } from '@apollo/client'
import {  Td, Tooltip, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { DeleteIcon, PencilIcon } from '../../assets/Icons'
import { IMaterial } from '../../store/Clothes'

interface MaterialListProps {
  clickEditButton:(material:IMaterial)=>void
  material:IMaterial
  clothID:string
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>
  setDeleteItem:React.Dispatch<React.SetStateAction<IMaterial>>
}

const MaterialItem = ({material,clothID,clickEditButton,setOpenModal,setDeleteItem}:MaterialListProps) => {
  console.log({material})
  
  return (
    <>
    <Tr>
        <Td>{material.name}</Td>
        <Td>{material.price}</Td>
        <Td>{material.quantity}</Td>
        {/* <Td>
            <Tooltip label={material.description}>{material.description.slice(0,8)}...</Tooltip> {material.description.slice(0,14)}...
        </Td> */}
        <Td>${parseFloat(material.quantity) * parseFloat(material.price)}</Td>
        <Td display="flex" justifyContent="space-between">
          <PencilIcon click={() =>clickEditButton({
            description:material.description,
            id: material.id,
            name: material.name,
            price: material.price,
            quantity: material.quantity            
          })}/> 
        <DeleteIcon
        click={()=>{
          setOpenModal(true)
          setDeleteItem(material)
          
        }}
        /></Td>

      </Tr>
     
    </>
    
  )
}

export default MaterialItem