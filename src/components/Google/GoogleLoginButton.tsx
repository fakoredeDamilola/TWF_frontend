import { Box } from "@chakra-ui/react"
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {


    


const clientID = import.meta.env.VITE_CLIENT_ID

    return (
        <Box>
            <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </Box>
    )
}

export default GoogleLoginButton