import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iconfigure } from "../../types/Iconfigure";



const initialState: Iconfigure = {
  telephone: "+7",
  telephoneValidate: "Обязательное поле",
  operation: "Оператор1",
  minuts: "66",
  internet: "34",
  rentWiFiRouter: false,
  ransomWiFiRouter: false,
  faceBook: false,
  vK: false,
  oK: false,
  instagram: false,
  tikTok: false,
};

export const configures = createSlice({
  name: "configure",
  initialState,
  reducers: {
    handleTelephone(state, action: PayloadAction<string>) {
      state.telephone = action.payload;
    },
    handleTelephoneValidate(state, action: PayloadAction<string>) {
      state.telephoneValidate = action.payload;
    },
    handleOperation(state, action: PayloadAction<string>) {
      state.operation = action.payload;
    },
    handleMinuts(state, action: PayloadAction<string>) {
      state.minuts = action.payload;
    },
    handleInternet(state, action: PayloadAction<string>) {
      state.internet = action.payload;
    },
    handleRentWiFiRouter(state, action: PayloadAction<boolean>) {
      state.rentWiFiRouter = action.payload;
    },
    handleRansomWiFiRouter(state, action: PayloadAction<boolean>) {
      state.ransomWiFiRouter = action.payload;
    },
    handleFaceBook(state, action: PayloadAction<boolean>) {
      state.faceBook = action.payload;
    },
    handlevK(state, action: PayloadAction<boolean>) {
      state.vK = action.payload;
    },
    handleOK(state, action: PayloadAction<boolean>) {
      state.oK = action.payload;
    },
    handleInstagram(state, action: PayloadAction<boolean>) {
      state.instagram = action.payload;
    },
    handleTikTok(state, action: PayloadAction<boolean>) {
      state.tikTok = action.payload;
    },
  },
});

export const {
  handleTelephone,
  handleTelephoneValidate,
  handleOperation,
  handleInternet,
  handleMinuts,
  handleRansomWiFiRouter,
  handleRentWiFiRouter,
  handleFaceBook,
  handleInstagram,
  handleOK,
  handlevK,
  handleTikTok,
} = configures.actions;

export default configures.reducer;
