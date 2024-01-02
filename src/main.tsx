import { CartProvider } from 'use-shopping-cart'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider
    mode="payment"
    cartMode="client-only"
    successUrl=""
    cancelUrl=""
    currency="USD"
    allowedCountries={['US']}
    billingAddressCollection={true}
    shouldPersist={true}
    stripe=''
  >
    <App />
  </CartProvider>,
)
