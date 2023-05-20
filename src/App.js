import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/preloader/Preloader";
import Home from "./pages/Home";
import ProfilePage from "./pages/Profile";
import Rating from "./pages/Rating";
import PassLog from "./pages/PassLog";
import CalendarPage from "./pages/Calendar";
import SettingsPage from "./pages/settings/Settings";
import SettingsAccountPage from "./pages/settings/Account";
import SecurityAccountPage from "./pages/settings/SecurityAccount";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/ResgisterPage";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/rating" element={<Rating />} />
              <Route path="/pass-log" element={<PassLog />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/settings" element={<SettingsPage />} />


              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />


              <Route
                path="/settings-account"
                element={<SettingsAccountPage />}
              />
              <Route path="/security" element={<SecurityAccountPage />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
