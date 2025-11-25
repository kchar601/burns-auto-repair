import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import useSystemTheme from "./components/useSystemTheme";
import "./App.css";

export default function App() {
  const theme = useSystemTheme();
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout theme={theme} />}>
          <Route index element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
