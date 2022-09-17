import { Box, Button, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ClothReview = () => {
  return (
    <Box>
      <Text color="#949494">there are no reviews yet.</Text>
      <Heading fontWeight="800" as="h4">be the first to review “t5s snaz two-way top”</Heading>
      <Text color="#949494">your email address will not be published. required fields are marked *</Text>
      <Heading fontWeight="800" as="h4">your rating *</Heading>
      <Box>hhheheh</Box>
      <Text>Your review</Text>
      <Textarea >

      </Textarea>
      <Text>name*</Text>
      <Input
      type="string"
      />
      <Text>email*</Text>
      <Input
      type="string"
      />
      <Button variant ="primary">Submit</Button>
    </Box>

  )
}

export default ClothReview