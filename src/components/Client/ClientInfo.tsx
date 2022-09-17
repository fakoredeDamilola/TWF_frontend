import { useMutation } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Circle, Flex, Heading, Img, Input, Text, useMediaQuery } from '@chakra-ui/react'
import { useRef } from 'react';
import { ADD_CLIENT_IMAGE, GET_CLIENT_DETAILS } from '../Dashboard/dashboardApiCalls';

interface IClientInfo {
    name:string;
    logo:string;
    id?:string;
    contactInfo:string;
    email:string;
    address:string;
    country:string;
    gender?:string;
    media: {
        facebook:string;
        instagram:string
    }
    description:string
    clientImage?:string
}

 


const ClientInfo = ({clientInfo}:{clientInfo:IClientInfo}) => {


  const hiddenFileImg = useRef<any>()

  const [addClientImage] = useMutation(
    ADD_CLIENT_IMAGE,{
      refetchQueries:[
        {query:GET_CLIENT_DETAILS,variables:{input:clientInfo?.id}}
        ]
    }
  )

  const handleFile = async (event:any,input:string) => {
    const formData = new FormData()
    formData.append('file', event)
    formData.append('upload_preset', 'sxzy4k1p')
    formData.append('folder', 'twf')


  try {
      const data = await fetch('https://api.cloudinary.com/v1_1/fakorede29/image/upload', {
          method: "POST",
          body: formData
        }).then(r => r.json())
          await addClientImage({
          variables:{
            input:{
              cloth_id:clientInfo?.id,
              image:data.secure_url
            }
          }
        })
      } catch (error) {
        console.log(error)
      }

  }
  const handleChange = (event:any,input:string) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded,input);
  };
  const handleImgClick = () => {
    hiddenFileImg.current.click();
  };
  return ( 
    
    <Box  padding={["10px 5px","20px 5px","25px"]} borderRadius="6px" width={["100%","100%","80%"]} margin= "0 auto">
       
          <Box>
              <Flex
    flexDirection="column"
    justifyContent="center" alignItems="center" padding="10px 0px"
     boxShadow="1px 3px 5px rgba(0.0.0.0.5)">
        <Circle title="Upload a file" position="relative" bg="brand.primary" size="190px" >
    <Img src={clientInfo?.clientImage} alt="img" borderRadius="50%" width="190px" height="190px" objectFit="cover" border="6px white solid" />    
    <Circle  onClick={handleImgClick} title="Upload a file" bg="brand.primary" size="20px" position="absolute" left="5px" bottom="40px" ><AddIcon color="white" fontSize="10px"/></Circle>
      </Circle>
      <Input
      display="none"
        type="file"
        ref={hiddenFileImg}
        onChange={(e) =>handleChange(e,"cloth")}
        style={{display: 'none'}} 
      />
    
        <Heading as="h3" mt="10px">{clientInfo.name}</Heading>
        <Text mt="10px" fontSize="14px" noOfLines={3} >{clientInfo.description}</Text>
    </Flex>
    <Box my="10px" borderY="2px solid gray" py="12px">
        <Text fontWeight="700">Contact Information</Text>
        
      <Box my="8px">
      <Text>Phone</Text>
      <Text fontWeight="700">{clientInfo.contactInfo}</Text>
      </Box>
      <Box my="8px">
      <Text>Address</Text>
      <Text fontWeight="700">{clientInfo.address}</Text>
      </Box>
      <Box my="8px">
      <Text>Gender</Text>
      <Text fontWeight="700">{clientInfo.gender}</Text>
      </Box>
      
    </Box>
    {/* <Flex justifyContent="space-between">
      {clientInfo.media.facebook && <Flex justifyContent="center" alignItems="center" background="blue" color="white" borderRadius="6px" width="120px" height="40px" >Facebook</Flex>}
      {clientInfo.media.instagram && <Flex  justifyContent="center" alignItems="center"  background="red" color="white" borderRadius="6px" width="120px" height="40px">Instagram</Flex>}

    </Flex> */}
          </Box>
  
</Box>
  )
}

export default ClientInfo