import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../service/actions/Actions";
import { REMOVE_TO_CART } from "../service/Constant";
// const getData = (state) => { }
function Home(props) {

    const getData = useSelector((state) => state.cartItemsReducer.carts)
    console.log(getData)

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(addToCart({
            price: '$900', name: 'I-PHONE'
        }))
    }
    const remove = (e)=>{
        dispatch(removeToCart(e))
    }
    // console.log('home',props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71XOLtQc1Neu4d8MwyQEDmSvrOx2UqgX3Dg&usqp=CAU"></img>
                </div>
                <div className="text-wrapper item">
                    <span>I-PHONE </span>
                    <span>Price: $900.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => send()}>add to cart</button>

                    <button className="remove-cart-btn" onClick={()=>remove()}
                    >Remove to cart</button> 
                </div>
            </div>
        </div>
    )
}

export default Home;