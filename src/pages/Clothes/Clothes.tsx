import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Circle, Flex, Grid, Heading, Img, Input, Text, Textarea,useMediaQuery } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner3 from "../../assets/banner-3.jpg"
import { PencilIcon } from '../../assets/Icons'
import ClothesMaterialAside from '../../components/Clothes/ClothesMaterialAside'
import CustomDatePicker from '../../components/CustomDatePicker'
import CustomModal from '../../components/CustomModal'
import { useParams } from 'react-router-dom'
import { ADD_CLOTH_MATERIAL_IMAGE, ADD_CLOTH_STYLE_IMAGE, ADD_NEW_MATERIAL, EDIT_CLOTHES_MATERIAL, GET_CLOTH, GET_CLOTHES_LIST } from '../../components/Dashboard/dashboardApiCalls'
import HyperLink from '../../components/HyperLink'
import MaterialList from '../../components/Materials/MaterialList'
import TagContainer from '../../components/TagContainer'
import { ICloth, IMaterial } from '../../store/Clothes'
import CustomInput from '../../components/CustomInput'
import { checkForError, handleInput } from '../../utils/hooks/useInput'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { UsersEnum } from '../../store/user'
import { AddIcon } from '@chakra-ui/icons'
import TransactionStateModal from '../../components/modals/ModalInfo'
import { handleFile } from '../../utils/util'

const Clothes = () => {

  const { id } = useParams();

  const [materialObj,setMaterialObj] = useState({
    id:"",
    name:"",
    price:"0",
    description:"",
    quantity:"0"
  })
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [openAddMaterial, setOpenAddMaterial] = useState(false);
  const [editMaterialID,setEditMaterialID] = useState<string>("")
  const [errorTable,setErrorTable] = useState<Array<string>>([])

  const [addMaterial] =useMutation(
    ADD_NEW_MATERIAL, {
      variables: {
        input: {
          cloth_id:id,
          materials: [materialObj]
        }
      },
      refetchQueries:[
        {query:GET_CLOTH,variables:{input:id}}
      ]
    }
  )

  const user = useSelector((state:RootState)=>state.user.user)

  const {data,loading,error} = useQuery(GET_CLOTH, {
    variables: {
      input:id
    }
  }
  )

  let cloth:ICloth = data?.clientCloth?.cloth

   

    const [addClothesImage] = useMutation(ADD_CLOTH_STYLE_IMAGE,{
      refetchQueries:[
      {query:GET_CLOTH,variables:{input:id}}
      ]
    })

    const [addMaterialImage] = useMutation(
      ADD_CLOTH_MATERIAL_IMAGE,{
        refetchQueries:[
          {query:GET_CLOTH,variables:{input:id}}
          ]
      }
    )

    const [editMaterial ] = useMutation(
      EDIT_CLOTHES_MATERIAL, {
        variables: {
          input: {
            cloth_id:cloth?._id ?? id,
            
            materials:[materialObj]
          }
        },
        refetchQueries : [
          {query:GET_CLOTHES_LIST,variables:{input:cloth?._id ?? id}}
        ]
      }
    )

    const showClothMaterialModal = () =>{
      setMaterialObj({
        id:"",
        name:"",
        price:"0",
        description:"",
        quantity:"0"
      })
      setOpenAddMaterial(true)
    }

    const addNewMaterial =async () => {
      if(user.type === UsersEnum.GUEST){
        // await createNewClient() 
      }else{
        const arr= checkForError(materialObj,setErrorTable,["description","id"])
        if(arr.length===0){
          console.log({editMaterialID})
          if(editMaterialID===""){

          await addMaterial() 
          setOpenAddMaterial(false)
          }else{
            console.log({cloth},materialObj)
            await editMaterial()
            setOpenAddMaterial(false)
          }
          setEditMaterialID("")
         
        }
      }
    }

    
    useEffect(()=>{
      if(data?.clientCloth?.cloth){
        setStartDate(new Date(data?.clientCloth?.cloth.start_date))
        setEndDate(new Date(data?.clientCloth?.cloth.end_date))

      }
    },[data])

    const hiddenFileInput = useRef<any>();
    const hiddenFileImg = useRef<any>()
    const handleClick = () => {
        hiddenFileInput.current.click();
      };
    const handleImgClick = () => {
        hiddenFileImg.current.click();
      };

      const handleFiles = async (event:any,input:string) => {
  
      try {
        const data = await handleFile(event,input)
            if(input === "cloth"){
              await addClothesImage({
              variables:{
                input:{
                  cloth_id:id,
                  image:data.secure_url
                }
              }
            })
            }else{
              await addMaterialImage({
                variables:{
                  input:{
                    cloth_id:id,
                    image:data.secure_url
                  }
                }
              })
            }
            

          } catch (error) {
            console.log(error)
          }

      }
      const handleChange = (event:any,input:string) => {
        const fileUploaded = event.target.files[0];
        handleFiles(fileUploaded,input);
      };
      const clickEditButton = (material:IMaterial ) => {
        setEditMaterialID(material.id)
        setOpenAddMaterial(true)
        setMaterialObj(material)
        console.log({material})
      }

    if(loading) return <Text>loading...</Text>
    if(data) return (
    <Box padding={["10px","10px","20px"]} width={["96%","96%","90%"]} margin="0 auto">
      <Flex my="10px" justifyContent="space-between">
        <Text color="#333" fontSize="20px">Clothes Details</Text>
        <HyperLink links={["Home","Clothes"]} />
      </Flex>
      <Box my="20px">
        <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap={[0,0,"8"]} background="white" borderRadius="6px" padding={[0,0,"27px 27px"]}>
        <Box>
            <Box border="1px black solid" borderRadius="6px" padding={["10px","10px","40px"]} pb="0px" position="relative" margin="0 auto">
            <Img src={cloth.style_image ?? Banner3} alt="img" borderRadius="50%" width="300px" height="300px" objectFit="cover" />
            
            <Box>
      <Circle  onClick={handleClick} title="Upload a file" bg="brand.primary" size="30px" position="absolute" right="90px" bottom="125px" ><AddIcon color="white" fontSize="15px"/></Circle>
      <Box position="relative" top="-90px">
        <Circle title="Upload a file" bg="brand.primary" size="100px" >
      <Img src={cloth.material_image ?? Banner3} alt="img" borderRadius="50%" width="100px" height="100px" objectFit="cover" border="6px white solid" />  
      </Circle>
      <Circle  onClick={handleImgClick} title="Upload a file" bg="brand.primary" size="20px" position="absolute" left="5px" bottom="5px" ><AddIcon color="white" fontSize="10px"/></Circle>
      </Box>
      
      <Input
      display="none"
        type="file"
        ref={hiddenFileInput}
        onChange={(e) =>handleChange(e,"cloth")}
        style={{display: 'none'}} 
      />
      <Input
      display="none"
        type="file"
        ref={hiddenFileImg}
        onChange={(e)=>handleChange(e,"material")}
        style={{display: 'none'}} 
      />
    </Box>
            </Box>
        </Box>
        <Box marginTop="10px">
        <Heading as="h2" size="lg" fontWeight="600" margin="0 auto">{cloth.name}</Heading>
        <Flex my="20px" justifyContent="space-between">
          <Box cursor="pointer" mt="3px"><Link to={`/dashboard/client/${cloth.clientID}`}>{cloth.clientName}</Link></Box>
           <TagContainer text={cloth.status} />
        </Flex>
        <Flex justifyContent="space-between" my="20px">
          
         {[
    {name:"Total",amount:cloth.amount ?? 0,color:"#333"},
    {name:"Paid",amount:cloth.amountPaid ?? 0,color:"#2e5095"},
    {name:"Remaining",amount:cloth.amountRemaining ?? 0,color:"#f5a623"},
  ].map((figure,index)=>{
          return (
            <Flex border="0" key={index} borderRadius="6px" justifyContent="center" alignItems="center" minWidth="100px" background={figure.color} color="white" padding="5px 4px">
          <Text fontSize="14px">{figure.name} :</Text>
          <Text fontSize="18px" ml="6px">₦{figure.amount}</Text>
          <PencilIcon width='["15px","15px","17px"]' click={()=>{}} />
        </Flex>
          )
         })}
        </Flex>
    <Box my="20px" border="1px solid black" borderRadius="6px" padding="10px" cursor="pointer">
      <CustomDatePicker
        startDate={startDate}
        endDate={endDate}
        setDateRange={setDateRange}
        />
    </Box>
        

        <Box>
          <Heading as="h3" size="md" fontWeight="600" margin="0 auto">Description</Heading>
          <Box my="10px">
          {cloth.description}
          </Box>
        </Box>
       
        </Box>
        </Grid >
    </Box>

    <Flex justifyContent="space-between" flexDirection={["column","column","row"]}>
      <Box background="white" w={["100%","100%","70%"]} borderRadius="6px" padding="27px 15px" height="350px" >
        <Flex justifyContent="space-between" margin="10px auto">
          <Heading as="h2" size="md" fontWeight="600" mt="8px">Materials</Heading>
          <Button variant="primary" w="120px" onClick={showClothMaterialModal}>Add Material</Button>
        </Flex>
        <Box my="15px" overflowY="scroll" height="80%">
          <MaterialList clothID={id ??"1"} 
          clickEditButton={clickEditButton} 
          materials={cloth.materials ?? []} />
        </Box>
      
      </Box>
    
    <ClothesMaterialAside charge ={0} total= {cloth.materials?.reduce((prev,current)=>parseInt(current.price + prev),0) ?? 0} />
    </Flex>
    <Box my="30px" textAlign="center">
      <Button width="250px" height="50px" variant="primary">
        Print Invoice
      </Button>
    </Box>
    <CustomModal
    onClick={addNewMaterial}
    isOpen={openAddMaterial}
    onClose={() => setOpenAddMaterial(false)}
    title={materialObj.id? "Edit Material" : "Add Material"}
    >
      <Box padding="20px">
     
        <Box my="10px">
          <Text>Material Name</Text>
          <CustomInput
        placeholder='Enter your name'
        type="text"
        input="text"
        name="name"
        inputValue={materialObj.name}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMaterialObj)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box my="10px">
          <Text>Material Price</Text>
          <CustomInput
        placeholder='Enter the price'
        type="number"
        input="text"
        name="price"
        inputValue={materialObj.price}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMaterialObj)}
        isError={errorTable.includes("price")}
        error ={errorTable.includes("price") ? "Put enter a price": ""}
        />
        </Box>
        <Box my="10px">
          <Text>Material Description</Text>
          <Textarea 
           name="description"
           value={materialObj.description}
           onChange={(e)=>handleInput(e.target.name,e.target.value,setErrorTable,setMaterialObj)}
          placeholder='material description' />
        </Box>
        <Box my="10px">
          <Text>Material Quantity</Text>
          <CustomInput
        placeholder='Enter the quantity'
        type="number"
        input="text"
        name="quantity"
        inputValue={materialObj.quantity}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setMaterialObj)}
        isError={errorTable.includes("quantity")}
        error ={errorTable.includes("quantity") ? "Put enter a quantity": ""}
        />
        </Box>
      </Box>

    </CustomModal>
    
    </Box>
    
  )
}

export default Clothes
