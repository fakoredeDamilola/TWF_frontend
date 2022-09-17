import { useQuery } from "@apollo/client"
import { Box, Flex } from "@chakra-ui/react"
import { GET_STORE_CLOTH } from "../../components/Dashboard/dashboardApiCalls"

const StoreOrderPage = () => {

    const {data} = useQuery(GET_STORE_CLOTH,{
        variables:{
          input:"gg"
        }
    
      })

      const {data:transactionData,loading,error} = useQuery(GET_STORE_CLOTH,{
        variables:{
            input:"gg"
        }
    })
  return (
    <Flex justifyContent="space-between" gap ="20px">
        <Box>
            <h1>Store Order Page</h1>
        </Box>
        <Box>
            chat system
        </Box>
    </Flex>
  )
}

export default StoreOrderPage