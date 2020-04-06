import React, { useState, useEffect } from "react";
import { calcBalance } from "../helpers";

const CAD = ({ data }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const res = calcBalance(data);
    setBalance(res);
  });

  return (
    <div className="pl3 pr3">
      <h1 className="f1 tc">CAD</h1>
      <p className="tc">Balance: {balance}</p>
      <ul className="list pl0">
        {data.map((item) => {
          return (
            <li className="flex justify-between ba mb3">
              <p>Direction: {item.direction}</p>
              <p>Type: {item.type}</p>
              <p>Amount: {item.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CAD;
