import React, { useState, useEffect } from "react";
import { calcBalance } from "../helpers";

const CAD = ({ data }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const res = calcBalance(data);
    setBalance(res);
  });

  return (
    <div>
      <h1 className="f1">CAD</h1>
      <p>Balance: {balance}</p>
      {data.map((item) => {
        return (
          <li>
            <p>Amount: {item.amount}</p>
            <p>Direction: {item.direction}</p>
            <p>Type: {item.type}</p>
          </li>
        );
      })}
    </div>
  );
};

export default CAD;
