import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { AuthProvider } from './pages/auth/auth.jsx'
import { AuthProvider } from './pages/auth/auth.jsx'
// import { CartProvider, useCart } from './component/cart/cart_context.jsx'
// import { createContext, useContext, useReducer, } from "react";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <CartProvider>
    <AuthProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </AuthProvider>
  // </CartProvider>
)
