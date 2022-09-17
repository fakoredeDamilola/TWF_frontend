import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Spinner,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Modal,
  ModalBody,
  useColorModeValue,
  useDisclosure,
  Circle,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { RootState } from "../../store/store";
import { setCloseModal, TrxState } from "../../store/modals";


const TransactionStateModal = ({open,close,click,type}:{open:boolean,close:()=>void,click:()=>void,type:TrxState}) => {
  const bgColour = useColorModeValue("#FFFFFF", "#15202B");
  const textColour = useColorModeValue("#333333", "#F1F5F8");
  const smallTxtColour = useColorModeValue("#999999", "#DCE5EF");
  const closeBtnColour = useColorModeValue("#666666", "#DCE5EF");
  const closeButtonBgColour = useColorModeValue("#319EF6", "#008DFF");
  const successBgColour = useColorModeValue("#22BB33", "#75F083");
  const errorBgColour = useColorModeValue("#CC334F", "#FF3358");
  const transBgColour = useColorModeValue("#2F82D0", "#FF3358");

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const modalDetails = useSelector(
    (state: RootState) => state.modals.modal
  );
  console.log({ modalDetails });
  const setOpen = modalDetails === null ? false : true;

  function handleCloseModal() {
    dispatch(setCloseModal());
  }
  return (
    <>
      <Modal isOpen={open} onClose={close} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="#3836CD"
          color='#fff'
          borderRadius='6px'
          paddingBottom='15px'
          width='95vw'
        >
          <ModalCloseButton
            bg='none'
            color={closeBtnColour}
            cursor='pointer'
            _focus={{ outline: "none" }}
            onClick={handleCloseModal}
            border={"1px solid"}
            size={"sm"}
            mt={3}
            mr={3}
            p={"7px"}
          />

          <ModalBody my={2}>
            <Flex justifyContent='center'>
              {type === TrxState.WaitingForConfirmation ? (
                <Spinner
                  thickness='4px'
                  speed='0.53s'
                  emptyColor='transparent'
                  color='#319EF6'
                  size='xl'
                  width='100px'
                  height='100px'
                  my={10}
                />
              ) : type === TrxState.TransactionSuccessful ? (
                <Circle size='90px' background={successBgColour} my={8}>
                  <Circle size='80px' background={bgColour} my={3}>
                    <CheckIcon fontSize='40px' color={successBgColour} />
                  </Circle>
                </Circle>
              ) : type === TrxState.TransactionFailed ? (
                <Circle size='90px' background={errorBgColour} my={8}>
                  <Circle size='80px' background={bgColour} my={3}>
                    <CloseIcon width='30px' height='30' color={errorBgColour} />
                  </Circle>
                </Circle>
              ) : null}
            </Flex>

            <Text
              textAlign='center'
              fontSize='20px'
              fontWeight='normal'
              color={textColour}
            >
              {type === TrxState.TransactionSuccessful
                ? "Transaction Succesful"
                : type === TrxState.WaitingForConfirmation
                ? " Waiting for Confirmation"
                : type === TrxState.TransactionFailed
                ? " Transaction Not Successful"
                : null}
            </Text>

            <Flex justifyContent='center'>
              {type === TrxState.WaitingForConfirmation ? (
                <Text
                  fontSize='16px'
                  py={5}
                  fontWeight='bold'
                  color={textColour}
                >
                  {modalDetails?.message}
                </Text>
              ) : type === TrxState.TransactionFailed ? (
                <>
                  <Text
                    py={3}
                    fontSize='14px'
                    fontWeight='normal'
                    color='#008DFF'
                  >
                    <a href='#' target='_blank'>
                      Retry
                    </a>
                  </Text>
                  <Text
                    py={3}
                    fontSize='14px'
                    fontWeight='normal'
                    color={errorBgColour}
                  >
                    {modalDetails?.message}
                  </Text>
                </>
              ) : type === TrxState.TransactionSuccessful ? (
               <Text>Successfully</Text>
              ) : null}
            </Flex>

                <Flex justifyContent='space-between'>
                <Button
                  variant='brand'
                  padding='24px 0'
                  width='100%'
                //   isFullWidth={true}
                  boxShadow='none'
                  mt={3}
                  background="transparent"
                  border="1px solid white"
                  color='#FFFFFF'
                  borderRadius="6px"
                  cursor='pointer'
                  onClick={click}
                >
                  Continue
                </Button>
                <Button ml="15px"
                  variant='brand'
                  padding='24px 0'
                  width='100%'
                //   isFullWidth={true}
                  boxShadow='none'
                  border='1px solid brand.primary'
                  mt={3}
                  borderRadius="6px"
                  background={closeButtonBgColour}
                  color='#FFFFFF'
                  cursor='pointer'
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
                </Flex>
            {/* <Flex justifyContent='center'>
              {type === TrxState.WaitingForConfirmation ? (
                <Text size='12px' color={smallTxtColour}>
                  Go to your wallet to confirm this
                </Text>
              ) : (
                <Button
                  variant='brand'
                  padding='24px 0'
                  width='100%'
                //   isFullWidth={true}
                  boxShadow='none'
                  border='0'
                  mt={3}
                  background={closeButtonBgColour}
                  color='#FFFFFF'
                  cursor='pointer'
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              )}
            </Flex> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransactionStateModal;
