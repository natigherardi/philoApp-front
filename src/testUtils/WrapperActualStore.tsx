import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import WrapperProps from "../types/Wrapper";

const WrapperRealStore = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default WrapperRealStore;
