import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/frontoffice/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/" element={<Frontoffice />}>
        <Route index element={<Homepage />} />
        <Route path="produits/:id" element={<ShoppingPage />} />
        <Route path="panier" element={<ShoppingCart />} />
        <Route path="details-livraison" element={<ShippingDetailsForm />} />
        <Route path="paiement" element={<Payment />} />
        <Route
          path="paiement-effectue/:id"
          element={<PaymentSuccess />}
        ></Route>
      </Route> */}
    </Routes>
  );
}

export default App;
