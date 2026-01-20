import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Testimonials from "./pages/Testimonials/Testimonials";
import AppLayout from "./pages/AppLayout/AppLayout";
import "./App.css";
import StyleGuide from "./pages/StyleGuide/StyleGuide";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/styleguide" element={<StyleGuide />} />
        </Route>
      </Routes>
    </Router>
  );
}
