import { useMutation } from '@apollo/client'
import { Box, Button, Checkbox, Flex, Grid, Heading, Input, InputGroup, keyframes, Link, Text } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/CustomInput'

import Logo from '../../components/Logo'
import Spinner from '../../components/Spinner'
import { setUser, UsersEnum } from '../../store/user'
import { checkForError, handleInput } from '../../utils/hooks/useInput'
import { setLocalStorage } from '../../utils/util'
import { SIGNIN_USER } from '../signup/graphql'


const index = () => {

  const navigate = useNavigate();

const [signinObj,setSigninObj] = useState({
  email:"",
  password:""
})
const [openSpinner,setOpenSpinner] = useState(false)
const [loginError,setLoginError] = useState(false)
const [errorTable,setErrorTable] = useState<Array<string>>([])
const dispatch = useDispatch()
const [loginUser,{data,loading,error}] = useMutation(
  SIGNIN_USER, {
    variables: {
      input: {
        email: signinObj.email,
        password: signinObj.password,
      }
    }
  }
)

useEffect(()=>{
  setOpenSpinner((prevState) => !prevState)
},[loading])

const resetForm= () =>{
  setSigninObj({
    email:"",
    password:"",
})
}

const login = async () => {
 const arr= checkForError(signinObj,setErrorTable,[])
  if(arr.length===0){
    console.log({signinObj})
    await loginUser()      
  }
}   

   useMemo(()=>{
    console.log({data,error,loading})
   if(data?.login?.token){
    setLocalStorage("authToken",data.login.token)
    dispatch(setUser({user:{
      ...data?.login?.user,
      token:data?.login?.token
    }}))
    console.log(data?.login)
    resetForm()
    if(data?.login?.user?.type === UsersEnum.CUSTOMER){
      navigate("/");
    }else if (data?.login?.user?.type === UsersEnum.TAILOR){
 navigate("/dashboard");
    }
   
   }else if(data?.login?.message){
    setLoginError(true)
   }
   },[data])


  return (
    <>
      <Grid  templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]}>
       <Box  
    width={["95%","80%","60%"]}
    margin="0 auto"
    my="50px"
    >
      <Box mb="30px">
         <Logo />
      </Box>
   
    <Heading as='h1' fontSize="27px">
    Log in
  </Heading>
    <Text margin="15px 0" color="#858B97">
      Welcome back! Please enter your details
    </Text>
    {loginError && <Text color="red.300">Invalid email or password</Text>}

    <Box margin="20px 0">
    <label>Email</label>
    <CustomInput
        placeholder='Enter your email'
        type="email"
        input="text"
        name="email"
        inputValue={signinObj.email}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setSigninObj)}
        isError={errorTable.includes("email")}
        error ={errorTable.includes("email") ? "Put enter a email": ""}
        
        />
    </Box>
   
    <Box margin="20px 0">
    <label>Password</label>
    <CustomInput
        placeholder='****'
        type="password"
        input="text"
        isError={errorTable.includes("password")}
        error ={errorTable.includes("password") ? "Put enter a password": ""}
        name="password"
        inputValue={signinObj.password}
        changeInput={(value,name)=>handleInput(name,value,setErrorTable,setSigninObj)}
        />
    </Box>
<Flex 
    justifyContent="space-between"
    margin="25px 0"
    >
      <Checkbox>Remember for 30 days</Checkbox>
      <Text color="brand.primary">Forgot password</Text>
  </Flex>
    <Button
    background="brand.primary"
    color="white"
    border="0"
    borderRadius="6px"
    variant="primary"
    width="100%"
    height="45px"
    onClick={()=>login()}
    >Sign in</Button>
    {/* <Box my={4}>
       <GoogleLoginButton />
    </Box> */}
   
 <Text color="#858B97" textAlign="center" mt={4}> Don't have an account? <Link color="brand.primary" href="/signup">Sign up</Link></Text>

 
    </Box> 
    <Box background="brand.primary" />
      </Grid>
    
      {/* <Spinner
        isOpen={openSpinner}
    onClose={() => setOpenSpinner(false)}
         /> */}
       
    </>
    
  )
}

export default index