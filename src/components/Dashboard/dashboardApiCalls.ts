import { gql } from "@apollo/client";

export const GET_USER_MONTHLY_DETAILS = gql`
query userData {
    userData {
... on UserSuccessDataMonthlyResponse {
      userAvgDataMonthly{
        clients
        clothes
        completedClothes
        clothesInProgress
        clothesToDo
        
      }
  }
  ... on GeneralErrorResponse{
  status
  message
  }
    }
    
}
`


export const ADD_NEW_CUSTOMER = gql`
mutation addClient($input:ClientInput) {
  addClient (input: $input){
    ... on ClientSuccessResponse {
      client {
        name
        gender
      }
}
  }
}
`

export const CUSTOMER_LIST = gql`
query clientList($params:ParamsInput) {
  clientList (params:$params) {
    ... on ClientListSuccessResponse {
      clients {
        _id
        name
        clothes {
          name
        }
        phone
        image
      }
      total
    }
  }
}
`
export const GET_CLIENT_DETAILS = gql`
query getClient($input:String){
  getClient(input:$input){
    ...on ClientSuccessResponse {
      client{
        name
        image
        phone
        description
        gender
        address
      }
    }
  }
}
`

export const ADD_NEW_MEASUREMENT = gql`
mutation addMeasurement($input:ClientMeasurementInput) {
  addMeasurement (input: $input){
    ... on MeasurementFrameSuccessResponse {
      status
      measurementFrame {
        id
        name
        description
      }
    }
  }
}
`
export const EDIT_MEASUREMENT = gql`
mutation editMeasurement($input:ClientMeasurementInput) {
  editMeasurement (input: $input){
    ... on MeasurementFrameSuccessResponse {
      status
      measurementFrame {
        id
        name
        description
      }
    }
  }
}
`

export const EDIT_CLOTHES_MATERIAL = gql`
mutation editClothesMaterial($input:AddClothesMaterialInput) {
  editClothesMaterial (input: $input){
    ... on ClothesMaterialSuccessResponse {
      __typename
		materials{
      name
      quantity
      price
    }
    }
  }
}
`

const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;


export const GET_MEASUREMENT_LIST = gql`
query clientMeasurement($input:String) {
  clientMeasurement (input: $input){
    ... on ClientMeasurementSuccessResponse {
      status
      measurement {
        id
        name
        description
        value
      }
    }
  }
}
`

export const GET_STORE_CLOTH = gql`
query getStoreCloth($input:String) {
  getStoreCloth(input: $input){
    ... on getClothSuccessResponse {
      status
     storeClothes {
      name
        price
        draft
        sizes
        clothURL
        description
        _id
        quantity
        user {
          name
          _id
          name
          email
          organization
        }
     }
    }
  }
}
`

export const GET_STORE_CLOTHES = gql`
query getStoreClothes($input:storeClothesInput) {
  getStoreClothes(input: $input){
    ... on getClothesSuccessResponse {
      status
     storeClothes {
      name
        price
        draft
        clothURL
        description
        _id
        keyWords
     }
    }
  }
}
`

export const GET_NOTIFICATIONS = gql`
query getNewNotification($input:getNotificationInput) {
  getNewNotification(input: $input) {
    notifications {
      _id
      title
      message
      clothID
      from
      type
      tx_id
    }
  }
} 
`

export const START_SALES_ORDER = gql`
mutation startOrder($input:startOrderInput) {
  startOrder(input: $input) {
    ... on AddItemToCartSuccessResponse {
      status
      data
    }
  }
}
`

export const GET_CLOTHES_LIST = gql`
query allClientClothes($input:String) {
  allClientClothes (input: $input){
    ... on AllClientClothesSuccessResponse {
      clothes {
        _id
        status
        name
        start_date
        end_date
        description
        style_image
        materials {
          name
        }
      }
  }
  }
}
`

export const GET_CLOTH = gql`
query clientCloth ($input:String) {
  clientCloth (input: $input){
    ...on ClientClothSuccessResponse {
      cloth {
        _id
        name
        amount
        style_image
        status
        clientName
        clientID
        material_image
        end_date
        start_date
        interest
        amountPaid
        amountRemaining
        description
        materials {
          id
          name
          description
          quantity
          price
        }
      }
    }

  }
}
`

export const ADD_CLOTH_AMOUNT = gql`
mutation addClothesAmountTotal ($input:ClothesPriceInput){
  addClothesAmountTotal (input: $input){
  ... on ClientClothSuccessResponse{
    cloth{
      amount
      name
    }
  }
  }
}
`

export const ADD_ITEM_TO_CART = gql`
mutation addItemToCart ($input:CartInput){
  addItemToCart (input: $input){
  ... on AddItemToCartSuccessResponse{
    status
    data
  }
  }
}
`


export const ADD_NEW_CLOTHES = gql`
mutation addClothes($input:AddClientClothesInput) {
  addClothes (input: $input){
    ... on ClothesSuccessResponse {
      clothes{
        name
        amount
      }
    }
  }
}
`

export const ADD_CLIENT_IMAGE = gql`
mutation addClientImage($input:AddClothesImageInput) {
  addClientImage (input: $input){
    ... on ClientImageSuccessResponse {
      client {
        image
      }
    }
  }
}
`

export const ADD_CLOTH_MATERIAL_IMAGE = gql`
 mutation addMaterialImage($input:AddClothesImageInput) {
  addMaterialImage (input: $input){
    ... on ClothesImageSuccessResponse {
      cloth {
        material_image
      }
    }
  }
}
`

export const ADD_CLOTH_TO_STORE = gql`
mutation addClothesToStore($input:AddStoreClothesInput) {
  addClothesToStore (input: $input){
    ... on ClothSuccessResponse {
      store {
        name

      }
    }
  }
}
`


export const DELETE_MATERIAL = gql`
mutation deleteMaterialInput($input:DeleteMaterialInput) {
  deleteMaterialInput (input: $input){
    ... on DeletedItemSuccessResponse {
      value
    }
  }
}
`

export const DELETE_MEASUREMENT = gql`
mutation deleteClientMeasurement($input:DeleteMaterialInput) {
  deleteClientMeasurement (input: $input){
    ... on DeletedItemSuccessResponse {
      value
    }
  }
}
`

export const ADD_CLOTH_STYLE_IMAGE = gql`
 mutation addClothesImage($input:AddClothesImageInput) {
  addClothesImage (input: $input){
    ... on ClothesImageSuccessResponse {
      cloth {
        style_image
      }
    }
  }
}
`


export const ADD_NEW_MATERIAL = gql`
mutation addClothesMateria ($input:AddClothesMaterialInput) {
  addClothesMaterial (input:$input) {
    ...on ClothesMaterialSuccessResponse{
      __typename
      materials {
        name
        quantity
      }
    }
  }
}
`