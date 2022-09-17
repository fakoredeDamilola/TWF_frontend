import { useQuery, useSubscription } from '@apollo/client'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_NOTIFICATIONS, GET_STORE_CLOTHES } from '../../components/Dashboard/dashboardApiCalls'
import { CART_SUBSCRIPTION } from '../../components/Dashboard/subscriptions'
import { updateNotifications } from '../../store/notifications'
import { RootState } from '../../store/store'
import { Footer } from './components/Footer'
import HomeJumbotron from './components/HomeJumbotron'
import MainFeatured from './components/MainFeatured'
import OtherClothes from './components/OtherClothes'

const Home = () => {
  const user = useSelector((state:RootState) => state.user.user)
  const dispatch = useDispatch()
  const { data} = useQuery(GET_STORE_CLOTHES,{
    variables:{
      input:{name:"dammy"}
    }

  })
  const { data:notificationData,refetch} = useQuery(GET_NOTIFICATIONS,{
    variables:{
      input:{limit:3}
    }

  })
  console.log({notificationData})
  useEffect(()=>{
    if(notificationData){
      dispatch(updateNotifications({notifications:notificationData?.getNewNotification?.notifications}))
    }
  },[notificationData])

  const { data:cartData,loading:cartLoading,error:cartError} = useSubscription(CART_SUBSCRIPTION)
  console.log({cartData,cartLoading,cartError},cartData?.newNotification?.notification?.to)
  useEffect(()=>{
    if(cartData?.newNotification && cartData?.newNotification?.notification?.to===user?._id){
      refetch()
    }
  },[cartData])
  return (
    <Box>
      {/* <MainNav /> */}
      <Box height={["80%","80%","400px"]} width="100%">
         <HomeJumbotron />
      </Box>
      <Box py="60px" bg="rgb(221, 233, 236)">
        <MainFeatured />
      </Box>
      <Flex justifyContent="center" alignItems="center" my="80px" flexDirection="column" width={["95%","95%","80%"]} mx="auto" textAlign="center">
      <Heading as="h1">Don’t wait to snag that piece</Heading>
      <Heading as="h2" color="#000">New drops everyday</Heading>
      <Divider  bg="#000" width="60px" my="15px" height="4px"/>
       <Text color="#949494" fontSize="17px">At TWF, there’s something for everyone at the BEST price without compromising on quaity.</Text>
      </Flex>

      <OtherClothes 
      // newCart={() =>
      //   subscribeToMore({
      //     document: CART_SUBSCRIPTION,
      //     // variables: { postID: params.postID },
      //     updateQuery: (prev, { subscriptionData }) => {
      //       if (!subscriptionData.data) return prev;
      //       const newFeedItem = subscriptionData.data;
      //       console.log({prev,subscriptionData})
      //       alert("subscribeToMore")
      //       return Object.assign({}, prev, {
      //         post: {
      //           comments: [newFeedItem, ...prev.post.comments]
      //         }
      //       });
      //     },
      //     onError: (err) => {
      //       console.log(err);
      //     }
      //   })
      // }
      clothes={data?.getStoreClothes?.storeClothes}/>
      {/* <Box py="50px" bg="rgb(212, 234, 238)"> */}
      {/* <Testimonials /> */}
      {/* </Box> */}
      
      
      <Footer />
    </Box>
    
  )
}

export default Home