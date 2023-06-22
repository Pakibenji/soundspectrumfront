// import React from "react";
// import logo from "../assets/img/spectrum.gif";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Profil = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Les mots de passe ne correspondent pas");
//     } else {
//       const data = {
//         password: password,
//       };

//       fetch("http://localhost:3000/signup", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => {
//           if (response.ok) {
//             console.log(`Nouveau mot de passe : ${password}`);
//             alert("Le mot de passe a été mis à jour !");
//           } else {
//             throw new Error("Erreur lors de la mise à jour du mot de passe");
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//           alert(
//             "Une erreur s'est produite lors de la mise à jour du mot de passe"
//           );
//         });
//     }
//   };

//   const handleDeleteAccount = () => {
//     fetch("http://localhost:3000/signup", {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Votre compte a été supprimé avec succès !");
//         } else {
//           throw new Error(
//             "Erreur lors de la suppression du compte utilisateur"
//           );
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         alert(
//           "Une erreur s'est produite lors de la suppression du compte utilisateur"
//         );
//       });
//   };

//   return (
//     <>
//       <section className="title-form">
//         <div className="link-accueil-container">
//           <NavLink className="link-accueil" to="/">
//             <p>retour à l'accueil</p>
//           </NavLink>
//         </div>
//         <h1>profil</h1>
//         <div className="form-container">
//           <div className="logo">
//             <img src={logo} alt="logo sound spectrum" />
//           </div>
//           <div className="form-card">
//             <form>
//               <div className="email-container">
//                 <input
//                   className="input-mail"
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   required
//                   max="40"
//                 />
//                 <i class="fa-regular fa-envelope" id="email"></i>
//               </div>
//               <div className="password-container">
//                 <input
//                   className="input-password"
//                   type="password"
//                   name="password"
//                   placeholder="Nouveau mot de passe"
//                   required
//                   max="40"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <i className="fa-solid fa-lock" id="lock"></i>
//               </div>
//               <div className="password-container">
//                 <input
//                   className="input-password"
//                   type="password"
//                   name="password"
//                   placeholder="confirmation du mot de passe"
//                   required
//                   max="40"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <i className="fa-solid fa-lock" id="lock"></i>
//               </div>
//               <button className="button-form" type="submit">
//                 mettre à jour
//               </button>
//             </form>
//             <div className="navlink-container">
//               <NavLink className="inscription" to="/login">
//                 <p>Supprimer mon compte</p>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Profil;
