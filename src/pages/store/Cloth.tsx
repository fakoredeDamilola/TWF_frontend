import { useMutation, useQuery } from '@apollo/client'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Circle, Flex, Grid, Heading, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useNumberInput } from '@chakra-ui/react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ADD_ITEM_TO_CART, GET_STORE_CLOTH } from '../../components/Dashboard/dashboardApiCalls'
import HyperLink from '../../components/HyperLink'
import ClothDescription from './components/ClothDescription'
import ClothInformation from './components/ClothInformation'
import ClothReview from './components/ClothReview'
import ClothSuggestions from './components/ClothSuggestions'

const cloth = () => {
    const {clothID} = useParams()
  const {data,error:e,loading:i} = useQuery(GET_STORE_CLOTH,{
    variables:{
      input:clothID
    }

  })
  console.log({data,e,i})
  const [addItemToCarts,{data:cartData,error,loading}] = useMutation(ADD_ITEM_TO_CART,{
    variables: {
      input:{
        cartID:clothID,
        tailorID:data?.getStoreCloth.storeClothes.user._id
      }
    }
  })
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: data?.getStoreCloth &&data?.getStoreCloth.storeClothes?.quantity,
  })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

const addItemToCart = async () => {
  await addItemToCarts()
  console.log({cartData,error,loading})
  if(cartData){
  }
}

  return (
    <Box bgColor="white">
        <Box padding="25px 0" bgColor="#949494">
           <Box width="90%" margin="0 auto">
           <HyperLink links={["home","cloth",clothID ?? ""]}/>
           </Box>
        
        </Box>
    <Popover
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
         
      <Flex position="fixed" right="0%" top="50%">
        <Circle bg="brand.primary" size="40px" color="white">{data?.getStoreCloth.storeClothes.user.name[0]}</Circle>
       
        </Flex>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Tailor
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
        <Text>Name : {data?.getStoreCloth.storeClothes.user.name}</Text>
          <Text>Email : {data?.getStoreCloth.storeClothes.user.email}</Text>
          <Text>Organization : {data?.getStoreCloth.storeClothes.user.organization}</Text>
        </PopoverBody>
       
      </PopoverContent>
    </Popover>   
        <Box width="85%" margin="0 auto">
          <Flex gap="60px" justifyContent="space-between" flexDirection={["column","column","row"]} padding="40px 0">
            <Box width={["90%","90%","600px"]} height={["180px","180px","500px"]} mx="auto">
                <Image src={data?.getStoreCloth.storeClothes.clothURL} alt="cloth" />
            </Box>
            <Box>
                <Heading as="h1" fontWeight="900" fontSize="30px">the bhddjd jdhjd</Heading>
                <Heading as="h2" fontWeight="500" fontSize="25px" mt= "20px">N{data?.getStoreCloth.storeClothes.price}</Heading>
                <Box my="40px">
                    <Flex justifyContent="space-between" padding="6px 20px" borderRadius="6px" my="10px" border="1px solid black">
                        <Text mt="10px">SIZE</Text>

                    <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
  >
    Select an Option <ChevronDownIcon />
  </MenuButton>
  <MenuList>
  {data?.getStoreCloth.storeClothes?.sizes}
  </MenuList>
</Menu>
                    </Flex>
                    <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap="15px" my="20px">
          <Flex border="1px solid black" padding="0px 8px"  justifyContent="space-between" height="40px" >
            <Text mt="6px">Quantity</Text>
            <HStack>
      <ChevronLeftIcon {...dec}/>
      <Input {...input} outline="none" width="25px" padding="0" border="0"/>
      <ChevronRightIcon  {...inc}/>
    </HStack>
          </Flex>
          <Button variant="primary" border="0" borderRadius="0" height="40px" onClick={addItemToCart}>
            add to cart
          </Button>
          
        </Grid>

                </Box>
                <Flex>
                  <Text>Categories: </Text> <Text marginLeft="4px">New in, Tops</Text>
                </Flex>
                <Flex mt="7px">
                  <Text>Tag: </Text> <Text marginLeft="4px">Fashion</Text>
                </Flex>
               
            </Box>

        </Flex>

        <Tabs>
  <TabList>
    <Tab>Description</Tab>
    <Tab>Additional Information</Tab>
    <Tab>Reviews(0)</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p><ClothDescription 
      description={data?.getStoreCloth.storeClothes?.description}
      /></p>
    </TabPanel>
    <TabPanel>
      <p><ClothInformation /></p>
    </TabPanel>
    <TabPanel>
      <p><ClothReview /></p>
    </TabPanel>
  </TabPanels>
        </Tabs>

        <ClothSuggestions />
        </Box>
        
       
    </Box>
  )
}

export default cloth