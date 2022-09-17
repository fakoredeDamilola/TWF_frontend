import { Box } from "@chakra-ui/react"

const PasswordIndicator = ({strength}:{strength:string}) => {
    if(strength!=="empty"){
        return (
     <Box mt="5px">
        <Box width="160px" height="5px" background={strength ==="weak" ? "red": strength==="medium" ? "orange" : "green"} borderRadius="10px" />
        {strength}
    </Box>
  )
    }else{
        return null
    }
  
}

export default PasswordIndicator