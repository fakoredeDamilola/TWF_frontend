import { Box, Text } from '@chakra-ui/react'

const ClothDescription = ({description}:{description:string}) => {
  return (
    <Box my = "20px"> 
      <Text>{description}</Text>
    </Box>
  )
}

export default ClothDescription