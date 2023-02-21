import { Route, Routes } from "react-router-dom";
import "./App.css";

import MyNav from "./componets/myNav";
import MySlider from "./componets/mySlider";
import Products from "./componets/products";
import Footer from "./componets/footer";
export function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MySlider />} />
        <Route path="home" element={<Footer />} />
      </Routes>
    </div>
  );
}

/**
 * Class Component
 *========================= 
    JSX -- javascript xml --- javascript Code
 *
 */
