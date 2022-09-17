import { createSlice } from "@reduxjs/toolkit"

export enum NOTIFICATIONTYPE {
    CART_REQUEST = "CART_REQUEST",
    START_ORDER = "START_ORDER",
    ORDER_SUCCESS = "ORDER_SUCCESS",    
    CANCEL_ORDER = "CANCEL_ORDER",
    CART="CART"
  }

export interface INotification {
    _id:string
      title:string
      message:string
      clothID:string
      from:string
      type:NOTIFICATIONTYPE
      tx_id?:string
}

interface IState {
    notifications:INotification[]
}

const initialState:IState ={
notifications:[]
}

const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        updateNotifications:(state,action) =>{
            console.log(action.payload.notifications)
            state.notifications = action.payload.notifications
        }
    }
})

export const {
    updateNotifications
} = notificationSlice.actions

export default notificationSlice.reducer