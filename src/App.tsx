import MainContainer from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Navigate to={"/register"} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
