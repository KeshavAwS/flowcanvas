import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/create"     element={<CreatePost />} />
        <Route path="/edit/:id"   element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;