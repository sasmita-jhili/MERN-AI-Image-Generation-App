import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import { Home, CreatePost } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className=" sm:p-8 px-4 py-2 w-full bg-[#e8eaf1] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
