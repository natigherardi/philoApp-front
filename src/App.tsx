import MainContainer from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useAppSelector } from "./store/hooks";
import LoadingModal from "./components/LoadingModal/LoadingModal";
import HomePage from "./pages/HomePage/HomePage";
import Modal from "./components/Modal/Modal";
import CreateQuotePage from "./pages/CreateQuotePage/CreateQuotePage";
import QuoteDetailPage from "./pages/QuoteDetailPage/QuoteDetailPage";
import MyQuotesPage from "./pages/MyQuotesPage/MyQuotesPage";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <MainContainer>
      {isLoading && <LoadingModal />}
      <Modal />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-quotes" element={<MyQuotesPage />} />
        <Route path="/create-quote" element={<CreateQuotePage />} />
        <Route path="/quote/:id" element={<QuoteDetailPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
