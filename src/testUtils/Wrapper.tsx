import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import WrapperProps from "../types/Wrapper";
import mockStore from "./mockStore";

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};

export default Wrapper;
