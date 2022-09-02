import MainContainer from "./AppStyled";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/*" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
