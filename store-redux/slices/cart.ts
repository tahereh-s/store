import { createSlice,type PayloadAction } from "@reduxjs/toolkit";


type item={
id:number;
productName:string
quantity:number
price:number
}
type cartItems={
    items:item[]
}
export const initialState:cartItems={
    items:[]

}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action:PayloadAction<item>){
            const itemIndex=state.items.findIndex(item=>{item.id==action.payload.id});
            if(itemIndex>=0){
                state.items[itemIndex].quantity++
            }
            else{
                state.items.push({
                    ...action.payload,quantity:1
                })
            }

        },
        removeFromCart(state,action:PayloadAction<number>){
            // const itemIndex=state.items.findIndex(item=>{item.id==action.payload.id});
            // if(itemIndex>=0){

            // }
            state.items=state.items.filter(item=>{item.id==action.payload})
          

        }

    }
})

export const{addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;