import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";
import Detail from "../src/pages/Detail";
import CardList from "./components/CardList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
