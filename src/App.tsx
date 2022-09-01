import MainContainer from "./AppStyled";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainContainer>
        <Routes>
          <Route path="/register" />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
