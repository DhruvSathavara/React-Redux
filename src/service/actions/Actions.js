import {  ADD_TO_CART,REMOVE_TO_CART } from "../Constant"


export const addToCart =(item)=>{
    return{
            type: ADD_TO_CART,
            payload:item
        }
            
}

export const removeToCart =()=>{
    // console.log("action")
    return{
            type: REMOVE_TO_CART,
        }
            
}