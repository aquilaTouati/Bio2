// import React, { useState } from "react";
// import "./Banque.css";
// import { ToastContainer, toast } from "react-toastify";

// const Banque = () => {
//   const [inputValue, setInputValue] = useState();
//   const [inputValue2, setInputValue2] = useState();
//   const [inputValue3, setInputValue3] = useState();
//   const [solde, setSolde] = useState(100);
//   return (
//     <div>
//       <h1 className="title">Bienvenue dans l'espace client de votre banque </h1>
//       <span> votre solde est: {solde}$</span>
//       <h2 className="title">Nos services</h2>

//       <span> Recharger votre compte</span>
//       <input
//         onChange={() => {
//           setInputValue(inputValue);
//           console.log(inputValue);
//         }}
//       />

//       <button
//         onClick={() => {
//           setSolde(solde + parseFloat(inputValue));
//         }}
//       >
//         {" "}
//         recharger
//       </button>

//       <span> Virement</span>
//       <input
//         onChange={() => {
//           setInputValue2(inputValue2);
//           console.log(inputValue2);
//         }}
//       />

//       <button
//         onClick={() => {
//           if (solde > inputValue2) {
//             setSolde(solde - parseFloat(inputValue2));
//           } else {
//             toast.error("Solde insuffisant");
//           }
//         }}
//       >
//         {" "}
//         recharger
//       </button>

//       <span> Recharge téléphone</span>
//       <input
//         onChange={() => {
//           setInputValue3(inputValue3);
//           console.log(inputValue3);
//         }}
//       />

//       <button
//         onClick={() => {
//           if (solde > inputValue3) {
//             setSolde(solde - parseFloat(inputValue3));
//           } else {
//             toast.error("Solde insuffisant");
//           }
//         }}
//       >
//         {" "}
//         recharger
//       </button>
//     </div>
//   );
// };

// toast.error("🦄 Wow so easy!", {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });

// export default Banque;
