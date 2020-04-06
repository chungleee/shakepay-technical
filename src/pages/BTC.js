import React, { useState, useEffect } from "react";
import { calcBalance } from "../helpers";

const BTC = ({ data }) => {
  const [balance, setBalance] = useState(0);
  const convertBTCToCAD = (BTC_balance, rate) => {
    return BTC_balance * rate;
  };

  useEffect(() => {
    const BTC_CAD_rate = 10136.5;

    const res = calcBalance(data);
    const BTC = convertBTCToCAD(res, BTC_CAD_rate);

    setBalance(BTC);
  });

  return (
    <div className="pl3 pr3">
      <h1 className="f1 tc">BTC</h1>
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

export default BTC;
