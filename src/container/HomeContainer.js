// import { connect } from "react-redux";
// import Home from "../component/Home";
// import {addToCart,removeToCart} from '../service/actions/Actions.js'


// //mapsTATEToProps MEANS SENDIG DATA TO COMPONENTS 

// const mapStateToProps = (state) => {
//     return {
//         Data: state.cartItems
//       }
//     }


// //mapDispatchToProps MEANS SENDIG DATA TO STORE 


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCartHandler: (data) => {
//         dispatch(addToCart(data))
//       },
//       removeToCartHandler: (data) => {
//         dispatch(removeToCart(data))
//       }
//     }
//   }
// // const mapDispatchToProps =(dispatch)=>({
// //     addToCartHandler:data=>dispatch(addToCart(data))
// // })
// export default connect (mapStateToProps,mapDispatchToProps)(Home)



// // export default Home;