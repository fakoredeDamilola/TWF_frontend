import { createSlice } from "@reduxjs/toolkit"

export interface IMaterial {
    id: string;
    name: string;
    quantity: string;
    price: string;
    description: string;
}

export interface ICloth {
    _id: number;
    name: string;
    amount?: number;
    description?: string;
    category?: string;
    amountPaid?:number;
    amountRemaining?:number;
    status: string;
    createdAt?: string;
    clientName?: string;
    clientID?: string;
    style_image?: string;
    material_image?: string;
    details?: string;
    materials? : IMaterial[];
    start_date?:string;
    end_date?:string;
}

export enum Status {
    COMPLETED ="COMPLETED",
    INPROGRESS ="IN PROGRESS",
    TODO ="TODO"
    }

const initialState ={

}

const clothesSlice = createSlice({
    name:"clothes",
    initialState,
    reducers:{

    }
})

export const {} = clothesSlice.actions

export default clothesSlice.reducer