import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style/style.css";
import HomePage from "./pages/index";
import RegionsPage from "./pages/regions"; 
import React from "react";
import NewsPage from "./pages/News/news";
import ContactPage from "./pages/contact";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="regions" element={<RegionsPage />}/>
        <Route path="news" element={<NewsPage />}/>
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
