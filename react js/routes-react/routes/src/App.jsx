import Navbar from "./compo/navbar";
import Sidebar from "./compo/sidebar";
import Content from "./compo/content";
import Footer from "./compo/footer";
import about from "./compo/about";
import contact from "./compo/contact";
import menu from "./compo/menu";
import home from "./compo/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="h-screen flex flex-col">

      <Navbar />
      <Routes> 
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/menu" element={<menu />} />
         </Routes>

      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>

      <Footer />

    </div>
    </BrowserRouter>
  );
};

export default App;
