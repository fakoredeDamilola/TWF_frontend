import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { StatEnum } from '../../store/user'
import DashboardStatCard from './DashboardStatCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const DashboardStat = ({list}:{list:any}) => {
  return (
    <Box margin={["0px 0px","0px 0px","40px 0px"]}>
      <Flex justifyContent="space-between" flexWrap="wrap">
        {Object.keys(list).map((item,index)=> {
            return (
                <DashboardStatCard item={item} value={list[item]} key={index} />
            )
        })

        }
      </Flex>       
    </Box>
  )
}

export default DashboardStat