import MainContainer from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Navigate to={"/register"} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
