import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { ProductContext } from "./Context/ProductContext";
import FilterProductContext from "./Context/FilterProductContext";
import { CartProvider } from "./Context/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain='dev-87f4h8f4j0qf268a.us.auth0.com'
    clientId='EpNiGFX2r0WXF6H0SW0vx9yard9Zvgih'
    redirectUri={window.location.origin}
  >
    <ProductContext>
      <FilterProductContext>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProductContext>
    </ProductContext>
  </Auth0Provider>
);
