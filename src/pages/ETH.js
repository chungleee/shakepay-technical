import React, { useState, useEffect } from "react";
import { calcBalance } from "../helpers";

const ETH = ({ data }) => {
  const [balance, setBalance] = useState(0);

  const convertBTCToCAD = (ETH_balance, rate) => {
    return ETH_balance * rate;
  };

  useEffect(() => {
    const ETH_CAD_rate = 231.87;

    const res = calcBalance(data);
    const ETH = convertBTCToCAD(res, ETH_CAD_rate);

    setBalance(ETH);
  });

  return (
    <div>
      <h1 className="f1">ETH</h1>
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

export default ETH;
