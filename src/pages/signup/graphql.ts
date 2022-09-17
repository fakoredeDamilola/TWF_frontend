import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
mutation register ($input: RegisterInput) {
    register (input: $input){
        ... on RegisterSuccessResponse {
      user {
        name
        email
				profileImage
        type
      }
      token
    }
    ... on RegisterFailResponse {
        message
        field
        status
    }
    }
}
`
export const SIGNIN_USER = gql`
mutation login ($input: LoginInput) {
    login (input: $input){
        ... on RegisterSuccessResponse {
      user {
        name
        email
				profileImage
        type
        _id
      }
      token
    }
    ... on RegisterFailResponse {
        message
        field
        status
    }
    }
}
`
