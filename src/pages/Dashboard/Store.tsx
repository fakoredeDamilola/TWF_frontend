import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import CreateCloth from '../../components/Dashboard/store/CreateCloth'

const Store = () => {
  return (
    <Box mx="20px">
    <Tabs>
  <TabList>
    <Tab>Create Clothes</Tab>
    <Tab>Draft</Tab>
    <Tab>On Sale</Tab>
    <Tab>Out of stocks</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p><CreateCloth /></p>
    </TabPanel>
    <TabPanel>
      <p>uue</p>
    </TabPanel>
    <TabPanel>
      <p>hwh</p>
    </TabPanel>
    <TabPanel>
      <p>hwh</p>
    </TabPanel>
  </TabPanels>
        </Tabs>
    </Box>
  )
}

export default Store