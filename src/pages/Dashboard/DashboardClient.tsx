import { useMutation, useQuery } from '@apollo/client'
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClientList from '../../components/Client/ClientList'
import CustomInput from '../../components/CustomInput'
import CustomModal from '../../components/CustomModal'
import FilterSection from '../../components/Dashboard/FilterSection'
import { FixedAddButton } from '../../components/MiniComponents'
import { GenderEnum, setCustomerList } from '../../store/client'
import { RootState } from '../../store/store'
import { UsersEnum } from '../../store/user'
import { ADD_NEW_CUSTOMER, CUSTOMER_LIST } from '../../components/Dashboard/dashboardApiCalls'
import { checkForError, clearInput, handleInput } from '../../utils/hooks/useInput'
import useDebounce from '../../utils/hooks/useDebounce'
import { SearchIcon } from '@chakra-ui/icons'

const DashboardClient = () => {
  const [view,setView] = useState("list")
  const [clientInfo,setClientInfo] = useState({
    name:"",
    gender:GenderEnum.MALE,
    phone:"",
    address:"",
    description:""
  })

  const user = useSelector((state:RootState)=>state.user.user)
  const {recordPerPage,pageNumber}= useSelector((state:RootState)=>state.clients)
  const [openAddClientModal,setOpenAddClientModal] = useState(false)
  const [errorTable,setErrorTable] = useState<Array<string>>([])
  const [openSpinner,setOpenSpinner] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [createNewClient,{data,loading,error}] = useMutation(
    ADD_NEW_CUSTOMER, {
      variables: {
        input: {
          ...clientInfo,
          age:0,
          search:""
        }
      },
      refetchQueries:[
        {query:CUSTOMER_LIST}
      ]
    }
  )

  useEffect(()=>{
    if(loading) setOpenSpinner((prevState) => !prevState)
  },[loading])

  console.log({data,error,loading})
  const debouncedQuery = useDebounce(searchQuery, 300);

  const { data:clientData, 
          loading:loadingData,
          error:clientError, 
  } = useQuery(CUSTOMER_LIST,{
    variables: {
      params : {
        itemPerPage:recordPerPage,
        page:pageNumber,
        search:debouncedQuery
      }
    }
  })


    const createNewClientInfo = async () => {
     
      if(user.type === UsersEnum.GUEST){
        await createNewClient() 
      }
     const arr= checkForError(clientInfo,setErrorTable,[])
      if(arr.length===0){
        console.log({clientInfo})
        await createNewClient() 
      setOpenAddClientModal(false)   
      }
    }  

    useMemo(()=>{
      if(data?.addClient?.client){
     clearInput(clientInfo,setClientInfo)
     }
     },[data])

     const dispatch = useDispatch()
     if(clientData){
       dispatch(setCustomerList({clients:clientData?.clientList?.clients}))
     }

  return (
    <Box width="94%" margin="40px auto">
      <Flex justifyContent="space-between">
        <Heading as="h2">Customers</Heading>
        <Box>
              <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon />}
    />
    <Input type='string' value={searchQuery} onChange={(e:any)=>setSearchQuery(e.target.value)} placeholder='Search for a client'  width={["80%","80%","300px"]} height="40px" borderRadius="20px" />
  </InputGroup>
        </Box>
     
      </Flex>
       <FixedAddButton onClick={()=>setOpenAddClientModal(true)}/>
     
      <Box my="20px">
        <Tabs borderBottom="2px solid #e6e6e6">
  <TabList>
    <Tab>Overview</Tab>
  </TabList>
    {/* <FilterSection totalCustomers={clientData?.clientList?.clients.length} view={view} setView={setView} /> */}
  
  <TabPanels>
    <TabPanel>
      {loadingData ? <Text>loading...</Text> :
      clientData && <ClientList 
      clientList={clientData?.clientList?.clients} 
      pageNumber={pageNumber}
      recordPerPage={recordPerPage}
      total={clientData?.clientList?.total}/>

      }
      
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      
      <CustomModal
    isOpen={openAddClientModal}
    onClose={() => setOpenAddClientModal(false)}
    title="Add Client"
    onClick={createNewClientInfo}
    >
      <Box padding="20px">
     
        <Box my="10px">
          <Text>Client Name</Text>
          <CustomInput
        placeholder='Client name'
        type="text"
        input="text"
        name="name"
        inputValue={clientInfo.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setClientInfo)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box my="10px">
          <Text>Client Phone Number</Text>
          <CustomInput
        placeholder='Client Phone Number'
        type="number"
        input="text"
        name="phone"
        inputValue={clientInfo.phone}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setClientInfo)}
        isError={false}
        />
        </Box>
        
        <Box my="10px">
          <Text>Client Address</Text>
          <CustomInput
        placeholder='Client Address'
        type="text"
        input="text"
        name="address"
        inputValue={clientInfo.address}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setClientInfo)}
        isError={false}
        />
        </Box>
        <Box my="10px">
        <Text>Client Gender</Text>
        <RadioGroup name="gender" defaultValue={GenderEnum.FEMALE} onChange={(e)=>handleInput("gender",e,setErrorTable,setClientInfo)}>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='red' value={GenderEnum.MALE}>
      Male
    </Radio>
    <Radio colorScheme='green' value={GenderEnum.FEMALE}>
      Female
    </Radio>
  </Stack>
</RadioGroup>
        </Box>
        <Box my="10px">
          <Text>Description</Text>
        <Textarea name="description" value={clientInfo.description} onChange={(e) => handleInput(e.target.name,e.target.value,setErrorTable,setClientInfo)}/>
        </Box>
       
       
      </Box>

    </CustomModal>
    </Box>
  )
}

export default DashboardClient