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
import ThirdStep from "./components/ThirdStep";
import FinalStep from "./components/Finalstep";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstStep/>} />
      <Route path="/secondstep" element={<SecondStep/>} />
      <Route path="/thirdstep" element={<ThirdStep/>} />
      <Route path="/finalstep" element={<FinalStep/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
