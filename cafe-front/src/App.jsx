import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Features from "./pages/Features";
import Nav from "./nav/nav1";
import Footer from "./components/footer";
import Login from "./pages/login";

function WebsiteLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;