import { createSlice } from "@reduxjs/toolkit"

export interface IClient {
_id:string
name:string
clothes:{
    name:string
}[]
image:string
phone:string
}

interface IState {
clients: IClient[]
client:null | IClient
recordPerPage:number
pageNumber:number
search:string
}

export enum GenderEnum {
MALE="MALE",
FEMALE="FEMALE"
}

const initialState:IState ={
clients :[],
client: null, 
recordPerPage:5,
pageNumber:1,
search:''
}

const clientSlice = createSlice({
    name:"clients",
    initialState,
    reducers:{
        setCustomerList(state,action){
            state.clients = action.payload.clients
        },
        setCustomer(state,action){
            state.client = action.payload.client
        },
        setPageNumber(state,action){
            state.pageNumber = action.payload.pageNumber
        },
        setSearch(state,action){
            state.search = action.payload.search
        }
    }
})

export const {
    setCustomerList,
    setCustomer,
    setPageNumber,
    setSearch
} = clientSlice.actions

export default clientSlice.reducer