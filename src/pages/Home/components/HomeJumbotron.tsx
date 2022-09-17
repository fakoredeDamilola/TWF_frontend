import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import { useEffect, useState } from 'react'

const HomeJumbotron = () => {
  const bgImg = [
    {
      image:"image1.jpg",
      title:"Thejene kekejke",
      subTitle:"eiejekej dkdkdkdkd kdkkdkkdk",
      link:"eieoeoioeo",
      position:"left",
      color:"rgb(15, 64, 72)"
    },
    {
      image:"image2.jpg",
      title:"Shola",
      subTitle:"eiejekej dkdkdkdkd kdkkdkkdk",
      link:"eieoeoioeo",
      position:"left",
      color:"black"
    },
    {
      image:"image3.jpg",
      title:"Dayo",
      subTitle:"eiejekej dkdkdkdkd kdkkdkkdk",
      link:"eieoeoioeo",
      position:"left",
      color:"white"
    },
    {
      image:"image4.jpg",
      title:"Dammy",
      subTitle:"eiejekej dkdkdkdkd kdkkdkkdk",
      link:"eieoeoioeo",
      position:"left",
      color:"black"
    },
  ]
  
  const [count,setCount] = useState(0)
  const changeImage = ()=>{
   
    setCount((Count) => (Count + 1) % bgImg.length);
  }
  useEffect(()=>{
    const interval = setInterval(changeImage,4000)
    return ()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <Box height={["80%","80%","400px"]}  position="relative">
        <Box  width="100%" height="100%" backgroundPosition="center" bgImage={`url('/${bgImg[count].image}')`}  backgroundSize="cover" backgroundRepeat="no-repeat" >
        <Flex  alignItems="center" height="100%">
          <Box
           padding={["50px 10px","50px 10px","0 60px"]} 
          //  position="absolute"
          //  top="100%"
          //  
          color={bgImg[count].color}
           >
            <Heading as="h1" transition="0.3s" >{bgImg[count].title}</Heading>
        <Heading as="h4" fontSize={["18px","18px","22px"]} my={["20px","20px","30px"]}>{bgImg[count].subTitle}</Heading>
        <Button width={["100px","100px","140px"]} height={["50px","35px","35px"]} fontSize="14px" border="0" variant="primary">Buy now</Button>
          </Box>
        
          </Flex>
        </Box>
    </Box>
    
  )
}

export default HomeJumbotron