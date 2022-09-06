import { LoadingContainer, Spinner } from "./SpinnerStyled";

const LoadingModal = (): JSX.Element => {
  return (
    <LoadingContainer>
      <div className="loading__container">
        <span className="loading__description">Loading...</span>
        <Spinner />
      </div>
    </LoadingContainer>
  );
};

export default LoadingModal;
