import React, { useState } from "react";
import "./Banque.css";

const Banque = () => {
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const [inputValue3, setInputValue3] = useState();
  const [solde,setSolde]=useState(100);
  return (
    <div>
      <h1 className="title">Bienvenue dans l'espace client de votre banque </h1>
      <span> votre solde est: {solde}$</span>
      <h2 className="title">Nos services</h2>

      <span> Recharger votre compte</span>
      <input
        onChange={() => {
          setInputValue(inputValue);
          console.log(inputValue);
        }}
      />

      <button
        onClick={() => {
          setSolde(solde + parseFloat(inputValue) );
        }}
      >
        {" "}
        recharger
      </button>

      <span> Virement</span>
      <input
        onChange={() => {
          setInputValue2(inputValue2);
          console.log(inputValue2);
        }}
      />

      <button
        onClick={() => {
          setSolde(solde - parseFloat(inputValue2) );
        }}
      >
        {" "}
        recharger
      </button>

      <span> Recharge téléphone</span>
      <input
        onChange={() => {
          setInputValue3(inputValue3);
          console.log(inputValue3);
        }}
      />

      <button
        onClick={() => {
          setSolde(solde + parseFloat(inputValue3) );
        }}
      >
        {" "}
        recharger
      </button>
    </div>
  );
};
export default Banque;
