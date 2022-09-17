import { useMutation } from "@apollo/client"
import { Box, Button, ButtonGroup, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { INotification, NOTIFICATIONTYPE } from "../../store/notifications"
import { RootState } from "../../store/store"
import CustomModal from "../CustomModal"
import { START_SALES_ORDER } from "../Dashboard/dashboardApiCalls"

const MiniNotification = ({onClose,isOpen}:{onClose:()=>void,isOpen:boolean}) => {
const [startSalesOrder,{data,error}] = useMutation(START_SALES_ORDER)

const notifications = useSelector((state:RootState) => state.notifications.notifications)
console.log({notifications})
const notifyUser = (type:NOTIFICATIONTYPE,id:string,from:string)=>{
      if(type===NOTIFICATIONTYPE.START_ORDER){
        console.log("yes")
        startSalesOrder({
          variables: {
            input: {
              notificationID: id,
              clientID:from
            }
          }
        })
      return "Your order has been placed"
      }
}

  return (
    <Modal blockScrollOnMount={false} onClose={onClose} isOpen={isOpen} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Notifications</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       {notifications.length >0 ? notifications?.map((notification:INotification) => (
        <Link to={notification.type === NOTIFICATIONTYPE.START_ORDER ? `/store/order/${notification?.tx_id}`: "#"} onClick={onClose}>
         <Box my="20px" cursor="pointer" bg={notification.type ===NOTIFICATIONTYPE.CART_REQUEST   ? "red.200":"white"}>
            
            <>
            <Heading as="h5" fontSize="17px" color="brand.primary">{notification.title}</Heading>
            <p>{notification.message}</p>
            </>
            
          {notification.type ===NOTIFICATIONTYPE.CART_REQUEST &&   <ButtonGroup variant='outline' spacing='6'>
          <Button variant="primary" border="0" borderRadius="0" height="25px" fontSize="13px" onClick={()=>notifyUser(NOTIFICATIONTYPE.START_ORDER,notification._id,notification.from)}>
           Accept Request
          </Button>
  <Button onClick={()=>notifyUser(NOTIFICATIONTYPE.CANCEL_ORDER,notification._id,notification.from)}  height="25px"  fontSize="13px">Reject Request</Button>
</ButtonGroup>}

        </Box>
        </Link>
     
        )) :<Box>No new notification</Box>

       }
      </ModalBody>
      {/* <ModalFooter display="flex" justifyContent="space-between">
        <Button onClick={onClick} variant="primary">{title}</Button>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter> */}
    </ModalContent>
  </Modal>
  )
}

export default MiniNotification