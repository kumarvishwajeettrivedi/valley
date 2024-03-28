import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/home" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

