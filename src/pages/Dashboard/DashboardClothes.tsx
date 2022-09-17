import { Box, Button, Flex, Heading, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { AiOutlinePlus } from 'react-icons/ai'
import ClothesList from '../../components/Clothes/ClothesList'
import CompletedClothes from '../../components/Clothes/CompletedClothes'
import CustomModal from '../../components/CustomModal'
import FilterSection from '../../components/Dashboard/FilterSection'

const DashboardClothes = () => {
  const [view,setView] = useState("list")
  const [openAddClothesModal,setOpenAddClothesModal] = useState(false)
  const [startDate, setStartDate] = useState<Date | null>(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState<Date | null>(new Date("2014/02/10"));
  const clothes = [
    {
      id: 1,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"TODO"
        // materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
    {
      id: 1,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"TODO"
    //   materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
    {
      id: 3,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"DONE"
    //   materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
  ]

  return (
    <Box width="94%" margin="40px auto" boxSizing='border-box'>
      <Flex justifyContent="space-between">
        <Heading as="h2">Clothes</Heading>
        <Flex>
          {/* <Button variant="primary" height="45px" padding="0 20px" onClick={()=>setOpenAddClothesModal(true)}>
         <AiOutlinePlus style={{marginRight:"5px"}}/> add Clothes
        </Button> */}
        </Flex>
        
      </Flex>
      <Box my="20px">
        <Tabs>
  <TabList>
    <Tab>All</Tab>
    <Tab>Completed</Tab>
    <Tab>Ongoing</Tab>
    <Tab>Todo</Tab>
  </TabList>
    {/* <FilterSection view={view} setView={setView} totalCustomers={5} /> */}
  
  <TabPanels>
    <TabPanel>
      <ClothesList addButton={false}/>
    </TabPanel>
    <TabPanel>
      <CompletedClothes />
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      
    
    </Box>
  )
}

export default DashboardClothes