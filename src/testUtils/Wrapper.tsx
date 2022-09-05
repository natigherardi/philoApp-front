import { Provider } from "react-redux";
import { store } from "../store/store";
import WrapperProps from "../types/Wrapper";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
