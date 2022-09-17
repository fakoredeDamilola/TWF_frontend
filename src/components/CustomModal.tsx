import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'


interface IModal {
    isOpen:boolean,
    onClose:()=>void,
    children:JSX.Element
    title:string,
    onClick:() =>void
}

const CustomModal = ({
    isOpen,
    onClose,
    children,
    title,
    onClick
}:IModal) => {
      
        return (
      
            <Modal blockScrollOnMount={false} onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                 {children}
                </ModalBody>
                <ModalFooter display="flex" justifyContent="space-between">
                  <Button onClick={onClick} variant="primary">{title}</Button>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        )
}

export default CustomModal