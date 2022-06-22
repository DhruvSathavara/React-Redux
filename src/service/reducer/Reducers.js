import { ADD_TO_CART,REMOVE_TO_CART } from "../Constant";

const initialState = {
    carts:[]
}

export default function cartItemsReducer(state=initialState,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }

            case REMOVE_TO_CART:
                state.carts.pop()
            return{
                ...state,
                carts:[...state.carts]
            }
            break;
            default : 
            return state
}
}