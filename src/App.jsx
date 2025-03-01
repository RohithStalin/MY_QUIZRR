import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Home from "./components/Home";
import LoginEmailPage from "./components/LoginEmailPage";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEmailPage />} />
        <Route path="/reset" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
