import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  HashRouter
} from "react-router-dom";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstStep/>} />
      <Route path="/secondstep" element={<SecondStep/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
