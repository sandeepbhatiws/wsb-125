import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

var getCartItems = JSON.parse(localStorage.getItem('cartItems'));

var getCartItems = getCartItems ? getCartItems : [];

// variable name can be changed
const initialState = {
    value: getCartItems,
}

// variable name can be changed
export const cartItems = createSlice({
    name: 'cart',  // name value can be change
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
            var productCheck = state.value.filter((v,i) => {
                if(v.id == action.payload.id){
                    return v;
                }
            });

            if(productCheck.length == 0){

                const productInfo = {
                    id : action.payload.id,
                    name : action.payload.name,
                    image : action.payload.image,
                    price : action.payload.price,
                    qty : 1
                }

                var finalData = [productInfo, ...state.value];

                state.value = finalData;

                localStorage.setItem('cartItems',JSON.stringify(finalData));

                toast.success('Product added to cart');
            } else {
                var productCheck = state.value.map((v,i) => {
                    if(v.id == action.payload.id){
                        if(v.qty < 5){
                            v.qty++;
                            toast.success('Cart updated Succesfully');
                        } else {
                            toast.error('Maximun Quantity reached');
                        }
                        return v;
                    } else {
                        return v;
                    }
                });

                state.value = productCheck;
                localStorage.setItem('cartItems',JSON.stringify(productCheck));
                
            }

            
        },
        increment: (state, action) => {

            var finalData = state.value.map((v,i) => {
                if(v.id == action.payload){
                    if(v.qty < 5){
                        v.qty++;
                        toast.success('Quantity Update Succeffully');
                    } else {
                        toast.error('Maximum quantity reached');
                    }
                    return v;
                } else {
                    return v;
                }
            })

            state.value = finalData;
            localStorage.setItem('cartItems',JSON.stringify(finalData));


            console.log(action);
            // state.value -= 1
        },
        decrement: (state, action) => {

            var finalData = state.value.map((v,i) => {
                if(v.id == action.payload){
                    if(v.qty > 1){
                        v.qty--;
                        toast.success('Quantity Update Succeffully');
                    } else {
                        toast.error('Cart qantity value must be one');
                    }
                    return v;
                } else {
                    return v;
                }
            })

            state.value = finalData;
            localStorage.setItem('cartItems',JSON.stringify(finalData));

            // state.value -= 1
        },
        cartDelete: (state, action) => {
            if(confirm('Are you sure you want to delete')){
                var finalData = state.value.filter((v,i) => {
                    if(v.id != action.payload){
                        return v;
                    }
                })
    
                state.value = finalData;
                localStorage.setItem('cartItems',JSON.stringify(finalData));
                toast.success('product remove from cart');
            }
            
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, cartDelete, incrementByAmount } = cartItems.actions

export default cartItems.reducer