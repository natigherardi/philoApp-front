import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import WrapperProps from "../types/Wrapper";

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default Wrapper;
