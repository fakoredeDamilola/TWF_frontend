import { Box, Flex, Grid, useMediaQuery } from '@chakra-ui/react'
import StoreBox from '../../../components/store/StoreBox'

const MainFeatured = () => {
    const mainFeature = [
        {
            name:"Ankara",
            clothURL:"image2.jpg",
            link:"ueuueu",
            _id:"ueueu",
            draft:false
        },
        {
            name:"Ankara",
            clothURL:"image3.jpg",
            link:"ueuueu",
            _id:"ueueu",
            draft:false
        },
        {
            name:"Ankara",
            clothURL:"image4.jpg",
            link:"ueuueu",
            _id:"ueueu",
            draft:false
        },

    ]
  return (
    <Box width={["100%","100%","90%"]} mx="auto">
        <Flex mx="auto" flexDirection={["column","column","row"]} justifyContent={["center","center","space-between"]} gap="20px" >
            {mainFeature.map((feature,index)=>{
                return <StoreBox key={index} clothesInfo={feature} featured={true} />
            })

            }
        </Flex>
    </Box>
  )
}

export default MainFeatured