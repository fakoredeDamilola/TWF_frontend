import { Box, Flex, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import StoreBox from '../../../components/store/StoreBox'
import { IStoreCloth } from '../../../store/storeClothes'

const OtherClothes = ({clothes}:{clothes:IStoreCloth[]}) => {
//    useEffect(()=>{
//         newCart()
//    },[])
  return (
    <Box width={["100%","100%","90%"]} mx="auto" my="40px">
        <Flex justifyContent={["center","center","space-between"]} flexDirection={["column","column","row"]} flexWrap="wrap" gap="30px">
            {clothes?.filter((item)=> !item.draft).map((feature,index)=>{
                return <StoreBox clothesInfo={feature} key={index} featured={false} />
            })

            }
        </Flex>
    </Box>
  )
}

export default OtherClothes