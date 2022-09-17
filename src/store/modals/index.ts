import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TrxState {
  WaitingForConfirmation,
  TransactionSubmitted,
  TransactionSuccessful,
  TransactionFailed,
}



export interface modalState {
  
  message?: string;
  trxState: TrxState;
}

type ModalState = {
  modal: TrxState | null | undefined;
  message?: string;
};

const initialState: ModalState = {
  modal: null,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal(state, action) {
      console.log(action)
      state.modal = action.payload.modal;
      state.message = action.payload.message
    },
    setCloseModal(state) {
      state.modal = null;
    },
   
  },
});

export const { setOpenModal, setCloseModal } = modalSlice.actions;
export default modalSlice.reducer;
