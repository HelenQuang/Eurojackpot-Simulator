import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <PropagateLoader
      color="var(--dark-purple)"
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
