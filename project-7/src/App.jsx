import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import LastStep from "./components/LastStep";
import ConfirmedPage from "./components/ConfirmedPage";
function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planName, setPlanName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const handleName = (userName) => {
    setUserName(userName);
  };

  const handleEmail = (userEmail) => {
    setUserEmail(userEmail);
  };

  const handleArcadeChoice = (arcadeChoice) => {
    if (arcadeChoice) {
      setPlanName("Arcade");
      setPlanPrice(9);
    }
  };

  const handleAdvancedChoice = (advancedChoice) => {
    if (advancedChoice) {
      setPlanName("Advanced");
      setPlanPrice(12);
    }
  };

  const handleProChoice = (proChoice) => {
    if (proChoice) {
      setPlanName("Pro");
      setPlanPrice(15);
    }
  };

  const handleSelectedPlan = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  };

  const handleOnlineService = (onlineService) => {
    setOnlineService(onlineService);
  };

  const handleLargerStorage = (largerStorage) => {
    setLargerStorage(largerStorage);
  };

  const handleCustomizableProfile = (customizableProfile) => {
    setCustomizableProfile(customizableProfile);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <FirstStep handleName={handleName} handleEmail={handleEmail} />
          }
        />
        <Route
          path='/secondstep'
          element={
            <SecondStep
              handleArcadeChoice={handleArcadeChoice}
              handleAdvancedChoice={handleAdvancedChoice}
              handleProChoice={handleProChoice}
              handleSelectedPlan={handleSelectedPlan}
            />
          }
        />
        <Route
          path='/thirdstep'
          element={
            <ThirdStep
              handleOnlineService={handleOnlineService}
              handleLargerStorage={handleLargerStorage}
              handleCustomizableProfile={handleCustomizableProfile}
              selectedPlan={selectedPlan}
            />
          }
        />
        <Route
          path='/laststep'
          element={
            <LastStep
              planPrice={planPrice}
              planName={planName}
              onlineService={onlineService}
              largerStorage={largerStorage}
              customizableProfile={customizableProfile}
              selectedPlan={selectedPlan}
            />
          }
        />
        <Route
          path='/confirmed'
          element={<ConfirmedPage name={userName} email={userEmail} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
