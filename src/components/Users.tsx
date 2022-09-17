import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { UsersEnum } from '../store/user'


interface IUsers {
    user: UsersEnum;
    setUser:React.Dispatch<React.SetStateAction<UsersEnum>>
}
const Users = ({user,setUser}:IUsers) => {
console.log({user})
    
  return (
    <Flex justifyContent="space-between" my="30px" 
    >
{Object.values(UsersEnum).map((item,index) => {
    return (
        <Flex 
        justifyContent="center" 
        alignItems="center" 
        width="50px" 
        height="50px"
        background={user ===item ? "#10103d" : "brand.primary"}
        borderRadius="50%"
        color="white"
        transform={user ===item ? "scale(1.06)" : "scale(1)"}
        fontSize="16px"
        cursor="pointer"
        key={index}
        _hover={{background:"#10103d",transform:"scale(1.06)"}}
        transition="0.3s"
        onClick={() => setUser(item)}

         >
            {item[0]}
        </Flex>
    )
}
)}
    </Flex>
  )
}

export default React.memo(Users)