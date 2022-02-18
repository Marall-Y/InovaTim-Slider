import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InovaTim from "./pages/Inova";

const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<InovaTim />} />
            </Routes>
          </div>
        </Router>
      </CssBaseline>
    </React.StrictMode>
  );
};

export default App;
