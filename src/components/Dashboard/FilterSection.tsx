import { Box, Flex, Input, Tab, TabList, Tabs, Text } from '@chakra-ui/react'

const FilterSection = ({view,setView,totalCustomers}:{view:string,setView:any,totalCustomers:number}) => {
    
  return (
    <Flex
    my="12px"
    justifyContent="space-between"
    padding="20px 0"
    borderBottom="2px solid #e6e6e6"
    >
        <Text mt="7px">{totalCustomers} Customers</Text>
        <Box>
                    <Tabs
            colorScheme="#2D276A"
            background="#F2F5F8"
            borderRadius="4px"
          >
            <TabList >
              <Tab
                padding="7px"
                background={view==="above" ? "#319EF6" : ""}
                color={view!=="above" ? "#319EF6" : ""}
                border="none"
                onClick={() => setView('above')}
              >
                Above
              </Tab>
              <Tab
                padding="7px"
                background={view==="below" ? "#319EF6" : ""}
                color={view!=="below" ? "#319EF6" : ""}
                border="none"
                onClick={() => setView('below')}
              >
                Below
              </Tab>
            </TabList>
          </Tabs>
        </Box>
        <Input
        type="text"
        placeholder="Search"
        borderRadius="20px"
        width="330px"
        />
          <Flex justifyContent="space-between" mt="6px">
            <Text>Sort by:</Text>
           {["Name","Clothes","Date"].map((item,index)=>(
            <Text mx="7px">
              {item}
            </Text>
           ))}
          </Flex>
    </Flex>
  )
}

export default FilterSection