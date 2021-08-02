import "./Portf.css";
import ExchangeList from "./components/Exchanges/ExchangeList";
import AssetsList from "./components/Holdings/AssetsList";
import Piechart from "./components/Piechart/Piechart";
import NavBar from "./components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Portf(props) {
  const [dat, setDat] = useState({});
  useEffect(() => {
    let ignore = false;
    if(!ignore) {

      func();
  }
  return () => {ignore = true}
  },[]);


  async function func() {
  const tokens = props.tokenValue;
  // console.log(tokens.token);
  const toke = "Bearer ";
  const tokenId = toke.concat(tokens.token);
  const res = await fetch("https://carret-website.herokuapp.com/api/amount", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": tokenId,
    },
  });
  const dataObj = await res.json();
  console.log(dataObj)
  setDat(dataObj);

  }

  const dummy_data = [
    {
      id: Math.random().toString(),
      symbol: "BTC",
      name: "Bitcoin",
      amount: `${dat.BTC ? dat.BTC : 0}`,
      amount_usd: `${dat.BTC ? (dat.BTC * 39775).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "ETH",
      name: "Ethereum",
      amount: `${dat.ETH ? dat.ETH : 0}`,
      amount_usd: `${dat.ETH ? (dat.ETH * 2290.06).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "USDT",
      name: "Tether",
      amount: `${dat.USDT ? dat.USDT : 0}`,
      amount_usd: `${dat.USDT ? (dat.USDT * 1.0).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "BNB",
      name: "Binance Coin",
      amount: `${dat.BNB ? dat.BNB : 0}`,
      amount_usd: `${dat.BNB ? (dat.BNB * 313.09).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "ADA",
      name: "Cardano",
      amount: `${dat.ADA ? dat.ADA : 0}`,
      amount_usd: `${dat.ADA ? (dat.ADA * 1.29).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "USDC",
      name: "USD Coin",
      amount: `${dat.USDC ? dat.USDC : 0}`,
      amount_usd: `${dat.USDC ? (dat.USDC * 1.0).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "XRP",
      name: "XRP",
      amount: `${dat.XRP ? dat.XRP : 0}`,
      amount_usd: `${dat.XRP ? (dat.XRP * 0.71).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "DOT",
      name: "Polkadot",
      amount: `${dat.DOT ? dat.DOT : 0}`,
      amount_usd: `${dat.DOT ? (dat.DOT * 14.52).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "BUSD",
      name: "Binance USD",
      amount: `${dat.BUSD ? dat.BUSD : 0}`,
      amount_usd: `${dat.BUSD ? (dat.BUSD * 1.0).toFixed(2) : 0}`,
    },
    {
      id: Math.random().toString(),
      symbol: "LTC",
      name: "Litecoin",
      amount: `${dat.LTC ? dat.LTC : 0}`,
      amount_usd: `${dat.LTC ? (dat.LTC * 138.48).toFixed(2) : 0}`,
    },
  ];
  return (
    <div className=".Portf">
      <NavBar />
      <div className="Main">
        <ExchangeList tokenValue={props.tokenValue} />
        <AssetsList data={dummy_data} />
        <Piechart data={dummy_data} />
      </div>
    </div>
  );
}

export default Portf;
