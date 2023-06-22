import Login from "../components/Login";

const LoginPage = ({ currUser, setCurrUser }) => {
  return (
    <>
      <Login currUser={currUser} setCurrUser={setCurrUser} />
    </>
  );
};

export default LoginPage;
