import {Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

import { Grid } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { TrxState } from '../store/modals'
import { RootState } from '../store/store'

const Spinner = () => {
  const modal = useSelector((state:RootState)=>state.modals.modal)
      if( modal ===TrxState.WaitingForConfirmation) {
        return (
     <Modal onClose={()=>{}} isOpen={true} isCentered>
     <ModalOverlay />
     <ModalContent background="#3836CD" >
       <ModalBody display="flex" justifyContent="center" py="50px">
      <Grid color="white" height={80} width={80} />
       </ModalBody>
     </ModalContent>
   </Modal>
  )
      }else return null
  
}

export default Spinner