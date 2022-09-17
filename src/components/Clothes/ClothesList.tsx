import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ICloth, Status } from '../../store/Clothes'
import { RootState } from '../../store/store'
import { checkForError, clearInput, handleInput } from '../../utils/hooks/useInput'
import AddNew from '../AddNew'
import CustomInput from '../CustomInput'
import CustomModal from '../CustomModal'
import { ADD_NEW_CLOTHES, GET_CLOTHES_LIST } from '../Dashboard/dashboardApiCalls'
import { FixedAddButton } from '../MiniComponents'
import ClothesItem from './ClothesItem'

const ClothesList = ({addButton}:{addButton?:boolean}) => {
 
  const { id } = useParams();

  const [openAddClothesModal,setOpenAddClothesModal] = useState(false)

  const client = useSelector((state:RootState)=>state.clients.client)

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>();
  const [clothesInput,setClothesInput] = useState ({
    name:"",
    status:Status.TODO,
  })
  const [errorTable,setErrorTable] = useState<Array<string>>([])

  useEffect(()=>{
    var result = new Date();
    const days = 10
  result.setDate(result.getDate() + days);
  setEndDate(result)
  },[])

  const [addNewClientClothes ] = useMutation(
    ADD_NEW_CLOTHES, {
      variables: {
        input: {
          client_id:client?._id ?? id,
          cloth:{
             ...clothesInput,
             status:Status.TODO,
          start_date:startDate,
          end_date:endDate
          }
         
        }
      },
      refetchQueries : [
        {query:GET_CLOTHES_LIST,variables:{input:client?._id ?? id}}
      ]
    },
  )

  const {data:clothesData,loading:clothesLoading,error:clothesError} = useQuery(GET_CLOTHES_LIST, {
    variables: {
      input:client?._id
    }
  }
  )


 const createNewClientClothes =async () => {
  const arr = checkForError(clothesInput,setErrorTable,["name","amount","materials","interest","status"])
  if(arr.length===0){
    await addNewClientClothes()
    clearInput(clothesInput,setClothesInput)
    setOpenAddClothesModal(false)
  }
 }

  return (
    <Box>
      {addButton && <FixedAddButton onClick={()=>setOpenAddClothesModal(true)} title="add clothes"/>}
      <Flex justifyContent="space-between" flexWrap="wrap" >
      {clothesData?.allClientClothes?.clothes.length> 0 ?clothesData?.allClientClothes?.clothes.map((clothes: ICloth,index:number) =>
       <ClothesItem key={index} clothes={clothes}/>
       ) : <AddNew />}
     
    </Flex>
    <CustomModal
    isOpen={openAddClothesModal}
    onClose={() => setOpenAddClothesModal(false)}
    title="Add Clothes"
    onClick={createNewClientClothes}
    >
      <Box padding="20px">
     <Flex justifyContent="space-between" my="10px">
      <Text fontSize="13px">client</Text>
      <Text>Fakorede Damilola</Text>
     </Flex>
        <Box my="10px">
          <Text>Clothes Name</Text>
          <CustomInput
        placeholder='Cloth name'
        type="text"
        input="text"
        name="name"
        inputValue={clothesInput.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setClothesInput)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box my="15px" >
           <Text my="5px">Date recieved - Date of collection</Text>
        <Flex justifyContent="space-between" borderRadius="6px" border="1px solid black" padding="5px">
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <ReactDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </Flex>
        </Box>
         
        <Box my="10px">
          <Text>Clothes Description</Text>
          <Textarea placeholder='clothes description' />
        </Box>
      </Box>

    </CustomModal>
    </Box>
    
  )
}

export default ClothesList