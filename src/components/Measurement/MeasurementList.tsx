import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IMeasurement } from '../../store/Measurement'
import { TrxState } from '../../store/modals'
import { RootState } from '../../store/store'
import { clearInput, checkForError, handleInput } from '../../utils/hooks/useInput'
import CustomInput from '../CustomInput'
import CustomModal from '../CustomModal'
import { ADD_NEW_MEASUREMENT, DELETE_MEASUREMENT, EDIT_MEASUREMENT, GET_MEASUREMENT_LIST } from '../Dashboard/dashboardApiCalls'
import { FixedAddButton } from '../MiniComponents'
import TransactionStateModal from '../modals/ModalInfo'
import MeasurementCard from './MeasurementCard'



const MeasurementList = ({measurementData,measurementLoading}:{
  measurementData:IMeasurement[],
  measurementLoading:boolean
}) => {
  const { id } = useParams();
  const [openAddMeasurementModal,setOpenAddMeasurementModal] = useState(false)
  const [openEditMeasurementModal,setOpenEditMeasurementModal] = useState(false)
  const [errorTable,setErrorTable] = useState<Array<string>>([])
  const [openModal,setOpenModal] = useState(false)
  const [measurement,setMeasurement] = useState<IMeasurement | null>()

  const [measurementInfo,setMeasurementInfo] = useState({
    name:"",
    description:"",
    value:0
  })
  const [editMeasurement,setEditMeasurement] = useState({
    name:"",
    description:"",
    value:"",
    id:""
  })

  const client = useSelector((state:RootState)=>state.clients.client)

const [addNewMeasurement ] = useMutation(
  ADD_NEW_MEASUREMENT, {
    variables: {
      input: {
        client_id:client?._id ?? id,
        measurement:[measurementInfo]
      }
    },
    refetchQueries : [
      {query:GET_MEASUREMENT_LIST,variables:{input:client?._id ?? id}}
    ]
  }
)
const [editMeasurementObj ] = useMutation(
  EDIT_MEASUREMENT, {
    variables: {
      input: {
        client_id:client?._id ?? id,

        measurement:[editMeasurement]
      }
    },
    refetchQueries : [
      {query:GET_MEASUREMENT_LIST,variables:{input:client?._id ?? id}}
    ]
  }
)

const [deleteMeasurementItem,{data,error:e,loading}] = useMutation(DELETE_MEASUREMENT,  {
  refetchQueries:[
    {query:GET_MEASUREMENT_LIST,variables:{input:client?._id ?? id}}
  ]

}
)

console.log({data,e,loading})


const deleteMeasurement =async () => {
  console.log({measurement})
await deleteMeasurementItem({
  variables:{
    input:{
      cloth_id:id,
      material_id:measurement?.id
    }
  }
})
}



  const AddNewMeasurement = async () => {
    const arr= checkForError(measurementInfo,setErrorTable,["description"])
    if(arr.length===0){
      await addNewMeasurement()
      clearInput(measurementInfo,setMeasurementInfo)
    setOpenAddMeasurementModal(false) 
    
    }
  }
  const EditNewMeasurement = async () => {
    const arr= checkForError(editMeasurement,setErrorTable,["description"])
    if(arr.length===0){
      console.log({editMeasurement})
      await editMeasurementObj()
      clearInput(measurementInfo,setMeasurementInfo)
    setOpenEditMeasurementModal(false) 
    
    }
  }

  return (
    <Box>
      <Flex my="15px">
     <FixedAddButton  onClick={()=>setOpenAddMeasurementModal(true)} title="add measurement"/>
      </Flex>
      <Flex justifyContent="space-between" my="20px" flexWrap="wrap">
         {measurementLoading ? <Text>loading...</Text> : 
      [...measurementData].map((measurement,index) => <MeasurementCard 
      setEditMeasurement={setEditMeasurement}
      key={index} 
      setOpenModal={setOpenModal}
      setOpenEditModal={setOpenEditMeasurementModal}
      measurement={measurement}
      setMeasurement={setMeasurement}
      />)
      }
        {/* {[...measurement].map((measurement,index) => <MeasurementCard key={index} measurement={measurement}/>)}   */}
    </Flex>

    <CustomModal
    isOpen={openAddMeasurementModal}
    onClose={() => setOpenAddMeasurementModal(false)}
    title="Add Measurement"
    onClick={AddNewMeasurement}
    >
      <Box padding="20px">
        <Box my="10px">
          <Text>Measurement Name</Text>
          <CustomInput
        placeholder='Measurement name'
        type="text"
        input="text"
        name="name"
        inputValue={measurementInfo.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMeasurementInfo)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box my="10px">
          <Text>Measurement Description</Text>
          <CustomInput
        placeholder='Measurement Description'
        type="text"
        input="textarea"
        name="description"
        inputValue={measurementInfo.description}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMeasurementInfo)}
        isError={false}
        />
        </Box>
        <Box my="10px">
          <Text>Measurement value</Text>
          <CustomInput
        placeholder='Measurement value'
        type="text"
        input="text"
        name="value"
        inputValue={measurementInfo.value}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMeasurementInfo)}
        isError={errorTable.includes("value")}
        error ={errorTable.includes("value") ? "Put enter a value": ""}
        />
        </Box>
      </Box>

    </CustomModal>
    <CustomModal
    isOpen={openEditMeasurementModal}
    onClose={() => setOpenEditMeasurementModal(false)}
    title="Edit Measurement"
    onClick={EditNewMeasurement}
    >
      <Box padding="20px">
        <Box my="10px">
          <Text>Measurement Name</Text>
          <CustomInput
        placeholder='Measurement name'
        type="text"
        input="text"
        name="name"
        inputValue={editMeasurement.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setEditMeasurement)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box my="10px">
          <Text>Measurement Description</Text>
          <CustomInput
        placeholder='Measurement Description'
        type="text"
        input="textarea"
        name="description"
        inputValue={editMeasurement.description}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setEditMeasurement)}
        isError={false}
        />
        </Box>
        <Box my="10px">
          <Text>Measurement value</Text>
          <CustomInput
        placeholder='Measurement value'
        type="text"
        input="text"
        name="value"
        inputValue={editMeasurement.value}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setEditMeasurement)}
        isError={errorTable.includes("value")}
        error ={errorTable.includes("value") ? "Put enter a value": ""}
        />
        </Box>
      </Box>

    </CustomModal>
    <TransactionStateModal
      open={openModal} 
      type={TrxState.WaitingForConfirmation}
      close={()=>setOpenModal(false)} click ={()=>{
        setOpenModal(false)
       deleteMeasurement()
      }} />
    </Box>
       
  )
}

export default MeasurementList