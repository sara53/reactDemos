import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import MyNav from "./components/MyNav";
import Products from "./components/Products";
import Movies from "./components/Movies";
import MovieForm from "./components/Movie-Form";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/newMovie" element={<MovieForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
