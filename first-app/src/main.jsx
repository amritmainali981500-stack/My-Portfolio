import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from "./CartContext";
import  {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import  OrderProvider  from "./OrderContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <OrderProvider>
    <BrowserRouter>
  <App />
    </BrowserRouter>
    </OrderProvider>
    </CartProvider>

  </StrictMode>
)
