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
    <div className="pl3 pr3">
      <h1 className="f1 tc">ETH</h1>
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

export default ETH;
