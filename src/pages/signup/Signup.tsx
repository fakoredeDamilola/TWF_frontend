import { Box, Button, Checkbox, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import Logo from '../../components/Logo'
import PasswordIndicator from '../../components/PasswordIndicator'
import Users from '../../components/Users'
import { REGISTER_USER } from './graphql'
import { setUser, UsersEnum } from '../../store/user'
import { useMutation } from '@apollo/client'
import CustomInput from '../../components/CustomInput'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../utils/util'
import { useDispatch } from 'react-redux'
import { checkForError } from '../../utils/hooks/useInput'
import { setCloseModal, setOpenModal, TrxState } from '../../store/modals'

const Signup = () => {
    const [user,setUserType] = useState(UsersEnum.TAILOR)
    const [signupObject,setSignupObject] = useState({
        name:"",
        email:"",
        password:"",
        organization:"",
        type:user,
        code:"77"
    })
   

    const navigate = useNavigate();
    const [errorTable,setErrorTable] = useState<Array<string>>([])
    const [passwordIndicator,setPasswordIndicator] = useState("empty")

    const dispatch = useDispatch()

    const [registerUser,{data,loading,error}] = useMutation(
      REGISTER_USER, {
        variables: {
          input: {
            name: signupObject.name,
            password: signupObject.password,
            organization:signupObject.organization,
            email: signupObject.email,
            type:user
          }
        }
      }
    )

    // useEffect(()=>{
    //  if(loading) setOpenSpinner((prevState) => !prevState)
    // },[loading])

 

    const handleInput = (name:string,value:string) => {
      setErrorTable([])
        setSignupObject((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })
        if(name==="password"){
            confirmPassword(value)
        }
    }

    const confirmPassword = (value:string) => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if(strongRegex.test(value)){
            setPasswordIndicator("strong")
        }else if(mediumRegex.test(value)){
            setPasswordIndicator("medium")
        }else{
            setPasswordIndicator("weak")
        }
    
        }


const resetForm= () =>{
  setSignupObject({
    name:"",
    email:"",
    password:"",
    organization:"",
    type:user,
    code:"77"
})
}
      const createNewUser = async () => {
        // if(user === UsersEnum.GUEST){
        //   dispatch(setOpenModal({modal:TrxState.WaitingForConfirmation,message:"Creating new user"}))
        //   await registerUser() 
        //   if(error)   dispatch(setOpenModal({modal:TrxState.WaitingForConfirmation,message:"An Error occcured"}))
        //  if(data) dispatch(setCloseModal())

        // }
       const arr= checkForError(signupObject,setErrorTable,[])
       console.log({arr})
        if(arr.length===0){
          dispatch(setOpenModal({modal:TrxState.WaitingForConfirmation,message:"Creating new user"}))
          await registerUser() 
          console.log({error,data,loading})
          if(error)   dispatch(setOpenModal({modal:TrxState.WaitingForConfirmation,message:"An Error occcured"}))
         if(data) dispatch(setCloseModal())     
        }
      }   
      
         useMemo(()=>{
          if(data?.register?.token){
            setLocalStorage("authToken",data.login.token)
          dispatch(setUser({user:{
            ...data?.register?.user,
            token:data?.register?.token
          }}))
          resetForm()
  console.log(data)
          navigate("/dashboard");
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
        Sign up
      </Heading>
      <Users user={user} setUser={setUserType}/>
        <Text margin="15px 0" color="#858B97">
          Hello! Welcome
        </Text>
    
        {/* {user !== UsersEnum.GUEST &&  */}
        <>
        <Box margin="20px 0">
        <label>Name</label>
        <CustomInput
        placeholder='Enter your name'
        type="text"
        input="text"
        name="name"
        inputValue={signupObject.name}
        changeInput={(value,name)=>handleInput(name,value)}
        isError={errorTable.includes("name")}
        error ={errorTable.includes("name") ? "Put enter a name": ""}
        />
        </Box>
        <Box margin="20px 0">
        <label>Email</label>
        <CustomInput
        placeholder='Enter your email'
        type="email"
        input="text"
        name="email"
        inputValue={signupObject.email}
        changeInput={(value,name)=>handleInput(name,value)}
        isError={errorTable.includes("email")}
        error ={errorTable.includes("email") ? "Put enter a email": ""}
        
        />
        </Box>
        </>
        {/* } */}
        
       {/* {user === UsersEnum.STUDENT ? 
        <Box margin="20px 0">
        <label>Code</label>
        <Input
        placeholder='code'
        onChange={(e)=>handleInput("code",e.target.value)}
        type="text"
        marginTop="6px"
        /> 
        </Box> : user === UsersEnum.TAILOR ? 
       <Box margin="20px 0">
       <label>Organization</label>
       <CustomInput
        placeholder='Enter your Organization'
        type="text"
        input="text"
        name="organization"
        inputValue={signupObject.organization}
        isError={errorTable.includes("organization")}
        error ={errorTable.includes("organization") ? "Put enter a organization": ""}
        changeInput={(value,name)=>handleInput(name,value)}
        />
       </Box> : null
        } */}
        <Box margin="20px 0">
       <label>Organization</label>
       <CustomInput
        placeholder='Enter your Organization'
        type="text"
        input="text"
        name="organization"
        inputValue={signupObject.organization}
        isError={errorTable.includes("organization")}
        error ={errorTable.includes("organization") ? "Put enter a organization": ""}
        changeInput={(value,name)=>handleInput(name,value)}
        />
       </Box> 

       {/* {user!==UsersEnum.GUEST && */}
        <Box margin="20px 0">
        <label>Password</label>
        <CustomInput
        placeholder='****'
        type="password"
        input="text"
        isError={errorTable.includes("password")}
        error ={errorTable.includes("password") ? "Put enter a password": ""}
        name="password"
        inputValue={signupObject.password}
        changeInput={(value,name)=>handleInput(name,value)}
        />
        <PasswordIndicator strength={passwordIndicator}/>
        </Box>
        {/* } */}
       
        <Button
        variant="primary"
        width="100%"
        height="45px"
        onClick={()=>createNewUser()}
        >Sign up</Button>
        {/* <Box my={4}>
           <GoogleLoginButton />
        </Box> */}
       
     <Text color="#858B97" textAlign="center" mt={4}> Already have an account? <Link href="/login" color="brand.primary">Login</Link></Text>
    
     
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

export default Signup