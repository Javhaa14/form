export const Error = ({ isValid, errorname }) => {
  return (
    <p className={`text-red-500 ${isValid ? "hidden" : "flex"}`}>{errorname}</p>
  );
};
