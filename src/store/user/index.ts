import { createSlice } from "@reduxjs/toolkit"


export enum UsersEnum {
    TAILOR='TAILOR',
    CUSTOMER='CUSTOMER',
    // STUDENT='STUDENT',
    GUEST="GUEST"
}

export enum DashBoardTab {
    HOME= "HOME",
    DASHBOARD= "DASHBOARD",
    CLIENTS ="CLIENTS",
    CLOTHES = "CLOTHES",
    STUDENTS ="STUDENTS",
    TAILORS ="TAILORS",
    STORE="STORE",
    GALLERY="GALLERY",
    PROFILE="PROFILE",
    HELP="HELP"
}

export enum StatEnum {
    CLIENTS="CLIENTS",
    CLOTHES="CLOTHES",
    "CLOTHES IN PROGRESS"="CLOTHES IN PROGRESS",
    "CLOTHES TO DO"="CLOTHES TO DO",
    "COMPLETED CLOTHES"="COMPLETED CLOTHES",
}

export interface IUser {
    name: string,
    email: string,
    profileImage: string,
    type: UsersEnum,
    token: string,
    _id: string;

}

interface IState {
    user: IUser
}

const initialState:IState ={
user: {
    name: "",
    email: "",
    profileImage:"",
    type:UsersEnum.TAILOR,
    token:"",
    _id:""
}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser(state,action){
            console.log(action.payload)
            state.user = action.payload.user
        }

    }
})

export const {
    setUser
} = userSlice.actions

export default userSlice.reducer

