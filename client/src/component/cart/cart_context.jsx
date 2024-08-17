// import { createContext, useContext, useReducer, } from "react";
// import  reducer  from './cart_reducer.jsx'
// const Cartcontext = createContext();

// const initialState = {
//     cart: [],
//     total_item: "",
//     total_amount: "",
//     shipping_fees: 500,
// };

// const CartProvider = ({ children }) => {
//     console.log(cart);
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const addTocart = (id, photos, price, name) => {
//         dispatch({ type: "ADD_TO_CART", payload: { id, photos, price, name } });
//     }


//     return <Cartcontext.Provider value={{ ...state, addTocart }}>
//         {children}
//     </Cartcontext.Provider>
// };

// const userCartcontaxt = () => {
//     return useContext(Cartcontext)
// }  

// export default {CartProvider, userCartcontaxt}