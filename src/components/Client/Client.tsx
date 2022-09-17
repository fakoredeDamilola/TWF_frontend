import { useQuery } from '@apollo/client'
import { Box, Circle, Flex, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner1 from "../../assets/banner-1.jpg"
import ClothesList from '../Clothes/ClothesList'
import { GET_CLIENT_DETAILS, GET_MEASUREMENT_LIST } from '../Dashboard/dashboardApiCalls'
import MeasurementList from '../Measurement/MeasurementList'
import ClientInfo from './ClientInfo'



const Client = () => {

const {id} = useParams()


  const { data:clientData, 
    loading:loadingData,
    error:clientError, 
} = useQuery(GET_CLIENT_DETAILS,{
  variables: {
    input:id
  }
})

const {data:measurementData,loading:measurementLoading,error} = useQuery(GET_MEASUREMENT_LIST, {
  variables: {
    input:id 
  }
})

const clientInfo = {
  name:clientData?.getClient?.client.name ??"Fakorede Damilola",
  logo:Banner1,
  id,
  contactInfo:clientData?.getClient?.client.phone,
  email:"dfako29@gmail.com",
  address:clientData?.getClient?.client.address,
  gender:clientData?.getClient?.client.gender,
  country:"Nigeria",
  description:clientData?.getClient?.client.description,
  media:{
    facebook:"fb.com",
    instagram:"insta.com"
  },
  clientImage:clientData?.getClient?.client.image 
}

  const [view,setView] = useState("list")


  return (
   <Flex>
    
    <Box margin="0 auto" flexGrow="1" padding="30px" boxSizing="border-box" my="20px" >
      
      <Tabs borderBottom="2px solid #e6e6e6"  variant='enclosed'
      >
  <TabList>
    <Tab fontSize={["13px","13px","16px"]}>Client Information</Tab>
    <Tab fontSize={["13px","13px","16px"]}>Measurement</Tab>
    <Tab fontSize={["13px","13px","16px"]}>Clothes</Tab>
  </TabList>
    {/* <FilterSection view={view} setView={setView} /> */}
  
  <TabPanels>
    <TabPanel>
      <ClientInfo clientInfo={clientInfo} />
    </TabPanel>
    <TabPanel>
      <MeasurementList measurementData={measurementData?.clientMeasurement?.measurement} measurementLoading={measurementLoading} />
    </TabPanel>
    <TabPanel>
      <ClothesList addButton={true}/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    
   </Flex>
  )
}

export default Client