const Logout = ({ setCurrUser }) => {
  const logout = async (setCurrUser) => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (!response.ok) throw data.error;
      localStorage.removeItem("token");
      setCurrUser(null);
      alert("Vous êtes déconnecté");
    } catch (error) {
      console.log("error", error);
      alert("Une erreur est survenue");
    }
  };
  const handleClick = (e) => {
    logout(setCurrUser);
    e.preventDefault();
  };
  return (
    <>
      <button onClick={handleClick}>Se deconnecter</button>
    </>
  );
};
export default Logout;
