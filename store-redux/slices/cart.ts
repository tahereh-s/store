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
        removeFromCart(state, action: PayloadAction<number>) {
            console.log(state.items);
        
            // Find the index of the item to be removed
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            
            // Check if the item exists in the cart
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
        
                // If quantity is 1, remove the item from the cart
                if (item.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== action.payload);
                } else {
                    // Otherwise, decrement the quantity
                    item.quantity -= 1;
                }
            } else {
                console.warn("Item not found in cart");
            }
        }
        

    }
})

export const{addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;