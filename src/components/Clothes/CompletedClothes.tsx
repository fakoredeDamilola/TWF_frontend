import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import EmptyListPage from '../EmptyListPage'
import ClothesItem from './ClothesItem'

const CompletedClothes = () => {
  const clothes = [
    {
      id: 1,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"TODO"
        // materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
    {
      id: 1,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"TODO"
    //   materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
    {
      id: 3,
      name: 'T-shirt',
      price: 10,
      picture: '',
      details: '/dashboard/clothes/1',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quis quam. Dolorem quis beatae eligendi consequuntur, laborum placeat ab vero voluptates nulla. Saepe corporis ratione ipsum? Quod harum adipisci, velit minus vero alias veritatis dicta repudiandae fugit tempore architecto deserunt. ",
      status:"DONE"
    //   materials:[{
    //     id:1,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    //   {
    //     id:2,
    //     name:"Cotton",
    //     price:"$10",
    //     description:"This is cotton",
    //     quantity:3
    //   },
    // ],
    },
  ]
  return (
    <Flex justifyContent="space-between" flexWrap="wrap" >
      {clothes.filter(cloth=>cloth.status ==="COMPLETED").length >0 ? clothes.filter(cloth=>cloth.status ==="COMPLETED").map(
        (clothes,index) => <ClothesItem key={index} clothes={clothes}/>): <EmptyListPage value="completed"/>
        }
     
    </Flex>
  )
}

export default CompletedClothes