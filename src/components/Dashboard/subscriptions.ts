import { gql } from "@apollo/client";

export const CART_SUBSCRIPTION = gql`
  subscription NewNotification {
  newNotification {
    notification {
      clothID
      from
      to
    } 
  }
}
`;