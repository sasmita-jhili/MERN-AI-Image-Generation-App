import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { Home, CreatePost } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="px-8 w-full bg-[#e8eaf1] h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
