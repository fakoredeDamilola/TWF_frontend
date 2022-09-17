import { Box, Button, Circle, Flex, IconButton, Text, Tooltip, useClipboard } from '@chakra-ui/react'
import React from 'react'
import { CopyIcon, PencilIcon } from '../../assets/Icons'
import { IMeasurement } from '../../store/Measurement'

interface IProps {
  measurement:IMeasurement
  setMeasurement:React.Dispatch<React.SetStateAction<IMeasurement | null | undefined>>
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>
  setEditMeasurement:React.Dispatch<React.SetStateAction<{
    name: string;
    description: string;
    value: string;
    id: string;
}>>
setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>

}

const MeasurementCard = ({measurement,setMeasurement,setEditMeasurement,setOpenModal,setOpenEditModal}:IProps) => {
  const { hasCopied, onCopy } = useClipboard(`${measurement.value} ${measurement.unit}`)

  return (
    <Box width={["95%","95%", "300px"]} my="40px" background="white" borderRadius="6px" boxShadow="-15px -5px 23px 0px rgba(225,224,240,0.75)">
        <Flex justifyContent="center" flexDirection="column" alignItems="center" position="relative">
          <Tooltip
          hasArrow
          bg="gray.300"
          color="black"
          label={measurement.value}
          >
            <Circle size="100px" top="-60px" background="brand.primary" mt="12px" position="absolute"
             border="6px solid white"
             display="flex" color="white"
             cursor="pointer"
             overflow="hidden"
             px="10px"
             ><Text fontSize="18px">{measurement.value}</Text> <Text fontSize="14px" ml="4px">{measurement.unit}</Text></Circle>
          </Tooltip>
             
             <Flex padding="15px 0" mt="50px">
              <Box>
              <Tooltip
                hasArrow
                label={hasCopied ? 'Copied!' : 'Copy'}
                bg="gray.300"
                color="black"
              >
                <IconButton
                  onClick={onCopy}
                  aria-label="Copy address"
                  icon={<CopyIcon />}
                  mt="-7px"
                  colorScheme="ghost"
                />
              </Tooltip>
              </Box>
              <Box ml="30px">
                <PencilIcon click={
                  () => {
                    setEditMeasurement({name:measurement.name,description:measurement.description,value:measurement.value,id:measurement.id})
                    setOpenEditModal(true)
                  }
                } />
              </Box>
              
             </Flex>
        </Flex>
       
        <Box padding="20px 10px" >
        <Text>{measurement.name}</Text>
        <Text>{measurement.description}</Text>
        
        </Box>
        <Button color="red" width="100%" textAlign="center" onClick={()=>{
          setMeasurement(measurement)
          setOpenModal(true)
        }}>delete</Button>
    </Box>
  )
}

export default MeasurementCard