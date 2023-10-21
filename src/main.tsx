import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './providers/FiltersProvider.tsx'
import { CartProvider } from './providers/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<FiltersProvider>
      <CartProvider>
        <App />
      </CartProvider>
		</FiltersProvider>
  </React.StrictMode>,
)
