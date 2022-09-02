import MainContainer from "./AppStyled";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <MainContainer>
        <Routes>
          <Route path="/*" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
