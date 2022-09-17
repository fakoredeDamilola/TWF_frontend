import { createSlice } from "@reduxjs/toolkit"

export interface IStoreCloth {
    _id: string;
    name: string;
    price?: string;
    draft:boolean;  
    clothURL: string;
    description?: string;
    link?: string;
    keyWords?: string;

}


const initialState ={

}

const storeClothesSlice = createSlice({
    name:"storeClothes",
    initialState,
    reducers:{

    }
})

export const {} = storeClothesSlice.actions

export default storeClothesSlice.reducer