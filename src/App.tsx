import MainContainer from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useAppSelector } from "./store/hooks";
import LoadingModal from "./components/LoadingModal/LoadingModal";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <MainContainer>
      {isLoading && <LoadingModal />}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </MainContainer>
  );
}

export default App;
