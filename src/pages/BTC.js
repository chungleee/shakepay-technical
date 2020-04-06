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
    <div>
      <h1 className="f1">BTC</h1>
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

export default BTC;
