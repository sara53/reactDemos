import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import MyNav from "./components/MyNav";
import MovieForm from "./components/Movie-Form";
function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="newMovie" element={<MovieForm />} />
      </Routes>
    </>
  );
}

export default App;
