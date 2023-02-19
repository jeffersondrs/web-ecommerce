import "./App.scss";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home-content/Home-content.component";
import About from "./components/about/About";
import Dashboard from "./components/support/Support";
import Navegation from "./components/navegation/Navegation.component";
import Products from "./components/products/Products.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navegation />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
