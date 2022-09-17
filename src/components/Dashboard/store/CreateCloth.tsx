import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Checkbox, CheckboxGroup, Circle, Flex, Grid, HStack, Img, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Text, Textarea } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { checkForError, handleInput } from '../../../utils/hooks/useInput'
import { handleFile } from '../../../utils/util'
import Banner3 from "../../../assets/banner-3.jpg"
import CustomInput from '../../CustomInput'
import { useMutation } from '@apollo/client'
import { ADD_CLOTH_TO_STORE} from '../dashboardApiCalls'
import { setCloseModal, setOpenModal, TrxState } from '../../../store/modals'
import { useDispatch } from 'react-redux'
const CreateCloth = () => {
    const [errorTable,setErrorTable] = useState<Array<string>>([])
    const [imagePreview,setImagePreview] = useState<string>("")
    const [disableButton,setDisableButton] = useState(false)
    const [storeClothesInput,setStoreClothesInput] = useState ({
        name:"",
        description:"",
        price:"",
        quantity:"",
        sizes:"",
        sizeAvailable:["23","24","25"],
        clothURL:"",
        draft:true,
        keyWords:[]
      })

     const dispatch = useDispatch()
const [addNewClothToStore] = useMutation(ADD_CLOTH_TO_STORE)

    const addToStore =async (type:string) => {
      const arr= checkForError(storeClothesInput,setErrorTable,[])
      console.log({arr})
      if(arr.length===0){
       const newCloth = {
          ...storeClothesInput,
          draft:type==="new"?false:true
        }
        dispatch(setOpenModal({modal:TrxState.WaitingForConfirmation,message:"creating new cloth"}))
        await addNewClothToStore({
          variables: {
            input:newCloth
          }
        })
        dispatch(setCloseModal())
        setStoreClothesInput({
          name:"",
          description:"",
          price:"",
          quantity:"",
          sizes:"",
          sizeAvailable:["23","24","25"],
        clothURL:"",
        draft:true,
        keyWords:[]
        })
      }
    }
    const hiddenFileInput = useRef<any>();
    const handleClick = () => {
      hiddenFileInput.current.click();
    };
    const handleChange = async (event:any,input:string) => {
      const fileUploaded = event.target.files[0];
      setDisableButton(true)
      const data =await handleFile(fileUploaded,input);
      setDisableButton(false)
       setImagePreview(data.secure_url)
        setStoreClothesInput(prevState =>{
          return { 
            ...prevState,
            clothURL:data.secure_url
          }
        })
    };


  return (
    <Flex justifyContent="space-between" flexDirection={["column","column","row"]}>
<Box>
         <Box my="10px">
          <Text>Clothes Name</Text>
          <CustomInput
        placeholder='Cloth name'
        type="text"
        input="text"
        name="name"
        inputValue={storeClothesInput.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setStoreClothesInput)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        
        </Box>
        <Box my="10px">
          <Text>Description</Text>
          <Textarea
           name="description"
           value={storeClothesInput.description}
           onChange={(e)=>handleInput(e.target.name,e.target.value,setErrorTable,setStoreClothesInput)}
          placeholder='Clothes description' />
        </Box>
        <Box my="10px">
          <Text>Price</Text>
          <CustomInput
        placeholder='Enter the price'
        type="number"
        input="text"
        name="price"
        inputValue={storeClothesInput.price}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setStoreClothesInput)}
        isError={errorTable.includes("price")}
        error ={errorTable.includes("price") ? "Put enter a price": ""}
        />
        </Box>
        <Box my="40px">
                    <Grid templateColumns="repeat(2,1fr)" gap="15px" my="20px">
                    <Flex justifyContent="space-between" padding="6px 20px" borderRadius="6px" border="1px solid black">
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
    Sizes <ChevronDownIcon />
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuDivider />
    <MenuOptionGroup color="white" title='Size' type='checkbox' onChange={(size)=>handleInput("sizes",size,setErrorTable,setStoreClothesInput)}>
      {["UK","US"].map((item,index)=>(<MenuItemOption color="white" value={item} key={index}>{item}</MenuItemOption>))}
    
    </MenuOptionGroup>
  </MenuList>
</Menu>
                    </Flex>
          <Flex border="1px solid black" padding="0px 8px"  justifyContent="space-between">
            <Text mt="15px">Quantity</Text>
            <HStack>
            <CustomInput
        placeholder='Enter the quantity'
        type="number"
        input="text"
        name="quantity"
        inputValue={storeClothesInput.quantity}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setStoreClothesInput)}
        isError={errorTable.includes("quantity")}
        error ={errorTable.includes("quantity") ? "Put enter a quantity": ""}
        />
    </HStack>
          </Flex>
      
<Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    borderRadius='md'
    width="140px"
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
  >
    keywords <ChevronDownIcon />
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuDivider />
    <MenuOptionGroup color="white" title='Keywords' type='checkbox' onChange={(key)=>handleInput("keyWords",key,setErrorTable,setStoreClothesInput)}>
      {["vogue","new","ancient","data","info"].map((item,index)=>(<MenuItemOption color="white" value={item} key={index}>{item}</MenuItemOption>))}
    
    </MenuOptionGroup>
  </MenuList>
</Menu>     
          
          
        </Grid>

          <ButtonGroup variant='outline' spacing='6' isDisabled={disableButton}>
          <Button variant="primary" border="0" borderRadius="0" height="40px" onClick={()=>addToStore("new")}>
            Add Cloth to Store
          </Button>
  <Button variant="primary" border="0" borderRadius="0" height="40px"  onClick={()=>addToStore("draft")}>Save as draft</Button>
</ButtonGroup>
                </Box>
    </Box>
    <Box marginLeft="30px">
            <Box 
              borderRadius="6px" 
              padding={["10px","10px","20px"]} pb="0px" position="relative" margin="0 auto">
              <Img 
              src={imagePreview ? imagePreview : Banner3} 
              alt="img" width="300px" height="300px" objectFit="cover" 
              /> 
     <Box position="absolute">
    <Circle  
    onClick={handleClick} title="Upload a file" bg="brand.primary" size="30px" right="30px" bottom="25px" ><AddIcon color="white" fontSize="15px"/></Circle>
    <Input
      display="none"
        type="file"
        ref={hiddenFileInput}
        onChange={(e) =>handleChange(e,"cloth")}
        style={{display: 'none'}} 
      />
    </Box>
          </Box>
         
    </Box>
    </Flex>
    
  )
}

export default CreateCloth