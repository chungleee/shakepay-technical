import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import CAD from "./pages/CAD";
import BTC from "./pages/BTC";
import ETH from "./pages/ETH";

function App() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [currencies, setCurrencies] = useState({});

  const getTransactionHistory = async () => {
    const res = await fetch(
      "https://shakepay.github.io/programming-exercise/web/transaction_history.json"
    );
    const data = await res.json();
    setTransactions(data);
    setLoading(false);
  };

  const FilterCurrencies = () => {
    const currencies = {
      CAD: [],
      BTC: [],
      ETH: [],
    };
    transactions.reduce((acc, current) => {
      if (current.currency === "CAD") {
        acc.CAD = [...acc.CAD, current];
      } else if (current.currency === "BTC") {
        acc.BTC = [...acc.BTC, current];
      } else if (current.currency === "ETH") {
        acc.ETH = [...acc.ETH, current];
      }
      return currencies;
    }, currencies);
    setCurrencies(currencies);
  };

  useEffect(() => {
    getTransactionHistory();
  }, []);

  useEffect(() => {
    FilterCurrencies();
  }, [transactions]);

  return loading ? (
    <div>...loading...</div>
  ) : (
    <Router>
      <nav className="flex justify-center mt3">
        <NavLink className="link black dim" to="/cad" activeClassName="red">
          CAD
        </NavLink>
        <NavLink
          className="ml3 mr3 link black dim"
          to="btc"
          activeClassName="red"
        >
          BTC
        </NavLink>
        <NavLink className="link black dim" to="eth" activeClassName="red">
          ETH
        </NavLink>
      </nav>

      <Route
        exact
        path="/cad"
        render={(props) => {
          return <CAD {...props} data={currencies.CAD} />;
        }}
      />
      <Route
        exact
        path="/btc"
        render={(props) => {
          return <BTC {...props} data={currencies.BTC} />;
        }}
      />
      <Route
        exact
        path="/eth"
        render={(props) => {
          return <ETH {...props} data={currencies.ETH} />;
        }}
      />
    </Router>
  );
}

export default App;
