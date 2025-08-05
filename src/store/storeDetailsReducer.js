import { createSlice } from '@reduxjs/toolkit';

const savedAuth = localStorage.getItem("auth");
const parsedAuth = savedAuth ? JSON.parse(savedAuth) : null;


const initialState =  parsedAuth ||   {
  isLoggedIn: false,
  auth: {},
  address:[],
  selectedAddress : {},
  orders:{}
};

const storeDetails = createSlice({
  name: 'storeDetails',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.auth = action.payload; // assuming payload is an array of auth info
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.auth = [];
      state.address = []
      state.selectAddress = {}
      state.orders = {}
    },

    addAddress(state,action){

      state.address.push(action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
    },

    selectAddress(state,action){

       state.selectedAddress = action.payload
       localStorage.setItem("auth", JSON.stringify(state));
      
    },

    updateAddress(state,action){

      state.address = state.address.filter(ele => ele.id !=action.payload.id)

      state.address.push(action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
      
    },

    deleteAddress(state,action){
         
        if(state.selectedAddress.id == action.payload) state.selectedAddress = {};
        
        state.address = state.address.filter(ele => ele.id!=action.payload)
        localStorage.setItem("auth", JSON.stringify(state));
    },

    addOrders(state,action){

      state.orders = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));

    }
  }
});

export const { login, logout, addAddress,selectAddress,deleteAddress,updateAddress,addOrders } = storeDetails.actions;
export default storeDetails.reducer;