import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const parseCart = savedCart ? JSON.parse(savedCart) : null;

const cartState = parseCart || {

    items : [],
    totalAmount :0,
    totalQuantity:0,
    
}

const cartDetails = createSlice({

    name:'cartSetails',
    initialState:cartState,
    reducers:{

        addToCart(state,action){
            
         const newProduct = action.payload;
         const existingProduct =   state.items.find(ele=> ele.productId == newProduct.productId);

           if(existingProduct){
               
               if(existingProduct.quantitynew>=existingProduct.quantity) return;
               existingProduct.quantitynew+=1;
           }

           else  state.items.push({...newProduct,quantitynew:1});

        state.totalAmount =  state.items.reduce((acc,curr) => acc + curr.quantitynew*curr.specialPrice ,0)
        
        state.totalQuantity = state.items.reduce((acc,curr) => acc + curr.quantitynew,0)

        localStorage.setItem("cart",JSON.stringify(state));


        },

        removeFromCart(state,action){

            const id = action.payload;   

           state.items =  state.items.filter((ele) => ele.productId != id)

           state.totalAmount = state.items.reduce((acc,curr) => acc + curr.quantitynew*curr.specialPrice,0);

           state.totalQuantity = state.items.reduce((acc,curr) => acc + curr.quantitynew,0)

            localStorage.setItem("cart",JSON.stringify(state));

        },

        updateCart(state,action){

            const{id,type} = action.payload;
            const existingProduct = state.items.find((ele) => ele.productId == id)

            if(type === 'INCREMENT'){
                  
                if(existingProduct.quantitynew >=existingProduct.quantity) return;
                existingProduct.quantitynew += 1;
            }
            
            else{

             existingProduct.quantitynew -= 1;

             if(existingProduct.quantitynew == 0) state.items = state.items.filter((ele) => ele.productId != id)

            }


            state.totalAmount = state.items.reduce((acc,curr)=> acc + curr.quantitynew*curr.specialPrice,0);

            state.totalQuantity = state.items.reduce((acc,curr) => acc + curr.quantitynew,0)

            localStorage.setItem("cart",JSON.stringify(state));


        },

        DeleteCart(state){

            state.items = []
            state.totalAmount = 0
            state.totalQuantity  = 0
            localStorage.setItem("cart",JSON.stringify(state));
        }

    }
})

 export const { addToCart,removeFromCart,updateCart,DeleteCart } = cartDetails.actions;
 export default cartDetails.reducer;
