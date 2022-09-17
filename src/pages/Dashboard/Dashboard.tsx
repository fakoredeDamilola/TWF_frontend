import { useQuery } from '@apollo/client'
import { Box, Flex, Skeleton, useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'
import DashboardChart from '../../components/Dashboard/DashboardChart'
import DashboardGoal from '../../components/Dashboard/DashboardGoal'
import DashboardStat from '../../components/Dashboard/DashboardStat'
import DashboardNav from '../../components/Navs/DashboardNav'
import { StatEnum } from '../../store/user'
import { GET_USER_MONTHLY_DETAILS } from '../../components/Dashboard/dashboardApiCalls'

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_USER_MONTHLY_DETAILS)
    
  if(error){
    localStorage.setItem('authToken','')
    window.location.reload()
  }
  const statInfo ={
    [StatEnum.CLOTHES]:data?.userData?.userAvgDataMonthly?.clothes ?? 0,
    [StatEnum.CLIENTS]:data?.userData?.userAvgDataMonthly?.clients ?? 0,
    [StatEnum['CLOTHES IN PROGRESS']]:data?.userData?.userAvgDataMonthly?.clothesInProgress ?? 0,
    [StatEnum['COMPLETED CLOTHES']]:data?.userData?.userAvgDataMonthly?.completedClothes ?? 0,
    [StatEnum['CLOTHES TO DO']]:data?.userData?.userAvgDataMonthly?.clothesToDo ?? 0,
  }

  const [mobile] = useMediaQuery("(min-width: 500px)")
  return (
    <>
     {/* <DashboardNav /> */}
    <Box width="94%" margin="0 auto" pt={["0px","0px","30px"]}>
     
      {!loading ?
      <DashboardStat list={statInfo}/> :  <Flex  flexWrap="wrap" justifyContent="space-between">
      {[1,2,3,4,5].map((item,index:number)=> 
      <Skeleton height="100px" key={index}/>
      )
      }

      
      </Flex>
      }
        <DashboardChart mobile={mobile}/>
        <DashboardGoal />
      </Box>
    </>
    
     
  )
}

export default Dashboard