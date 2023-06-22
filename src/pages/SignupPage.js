import Signup from "../components/Signup";

const SignupPage = ({ currUser, setCurrUser }) => {
  return (
    <>
      <Signup currUser={currUser} setCurrUser={setCurrUser} />
    </>
  );
};

export default SignupPage;
