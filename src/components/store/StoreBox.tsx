import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IStoreCloth } from '../../store/storeClothes'


interface IStoreBox {
    clothesInfo: IStoreCloth
    featured:boolean
}

const StoreBox = ({clothesInfo,featured}:IStoreBox) => {
    const [show,setShow] = useState(false)
    // const contentProps = useSpring({
    //     opacity: show ? 1 : 0,
    //     marginTop: show ? 0 : -500
    //   });
  return (
    <>
    {featured ? (
    <Link to={`/store/cloth/${clothesInfo._id}`}>
        <Box mx="auto">
           <Box width={["90%","90%","300px"]} borderRadius="6px" height="270px"  bgImage={clothesInfo.clothURL} bgSize="cover" bgRepeat="none" transition="all 0.5s" bgPosition="center" cursor="pointer" position="relative" mx="auto" _hover={{
        filter:"grayScale(100%)",

    }}>
        <Flex position="absolute" bottom="10%" px="10px" flexDirection="column" justifyContent="flex-end">
            <Heading as="h2" color="#000">{clothesInfo.name}</Heading>
            <Button mt="14px" border="3px black solid" width="100px" height="35px" boxSizing="border-box" color="black" fontSize="14px"> Shop here</Button>
        </Flex>
    </Box> 
        </Box>
 
    </Link>
   ) :
   <Link to={`/store/cloth/${clothesInfo._id}`}>
    <Box mx="auto">
        <Box onMouseEnter={()=>setShow(show =>!show)} onMouseOut={()=>setShow(false)}  width={["90%","90%","300px"]} mx="auto">
        <Box height="260px" bgImage={clothesInfo.clothURL} bgSize="cover" bgRepeat="none" transition="all 0.5s" bgPosition="center" cursor="pointer" position="relative"  borderRadius="6px">
      {show&& <Box bg="#000" padding="6px 0" fontSize="12px" position="absolute" bottom="0" color="white" borderRadius="6px 6px 0 0" left="calc(50% - 40px)" transition="all 0.55s ease-in-out" width="80px" textAlign="center">Quick look</Box>}
    </Box> 
    <Box mt="6px" my="13px" cursor="pointer">
        <Flex justifyContent="space-between">
            <Text color="#000" fontWeight="800">{clothesInfo.name.slice(0,12)}...</Text>
            
        {/* {!show ? <Text color="#949494">N{clothesInfo.price}</Text> : <animated.div>
            
            </animated.div>} */}
            <Text color="#949494">N{clothesInfo.price}</Text>
        </Flex> 

        <Text fontSize="12px" color="#949494" mt="5px">{clothesInfo.keyWords}</Text>
    </Box>
   
    </Box>
    </Box>
    
    </Link>
        
    }
    </>
    
    
  )
}

export default StoreBox