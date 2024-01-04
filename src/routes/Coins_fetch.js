import React, { useEffect, useState } from "react";
import CoinDetail from "./CoinDetail";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Coins = () => {
  const style = {
    height: "2000px",
    background: "lavender",
  };
  const pStyle = {
    cursor: "pointer",
  };
  const url = `https://api.coinpaprika.com/v1/tickers`;

  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState({});
  const [coinSymbol, setCoinSymbol] = useState("");

  const fetchHandle = async () => {
    const res = await fetch(url);
    const json = await res.json();
    // const filter = json.filter((coin, index) => index < 100);
    const filter = json.filter((coin) => coin.rank <= 100);
    setCoins(filter);

    // const symbols = coins.map((coin) => coin.symbol);
    // const distinctSymbols = new Set(symbols);
    // setCoinSymbol(distinctSymbols);
  };
  // axios 라이브러리
  // 상세페이지
  // protected : 메뉴에

  const navigate = useNavigate();
  const CoinDetailHandle = (param) => {
    navigate(`/coins/${param}`);
  };

  const selectCoinHandle = (event) => {
    // alert(event.target.value);
    const findCoin = coins.find((coin) => coin.symbol === event.target.value);
    setSelectCoin(findCoin);
  };
  // js 자료구조 객체
  // set 배열의 중첩 부분을 걸러내는 자료구조
  // map 객체의 중첩 부분을 걸러내는 자료구조

  return (
    <section style={style}>
      <h2> 종목 {coins.length} 개 </h2>
      {coins.length >= 1 && (
        <select onChange={selectCoinHandle}>
          <option> 코인 종목을 선택하세요. </option>
          {coins.map((coin) => (
            <option key={coin.symbol}>{coin.symbol}</option>
          ))}
        </select>
      )}

      {selectCoin ? (
        <div>
          <p>{selectCoin.id}</p>
          <p>{selectCoin.name}</p>
          <p>{selectCoin.symbol}</p>
          <p>{selectCoin.rank}</p>
          <p>{selectCoin.total_supply}</p>
          <p>{selectCoin.beta_value}</p>
        </div>
      ) : null}

      <h2> 종목들 </h2>
      {coins.length <= 0
        ? "Loading..."
        : coins.map((coin) => <div>{coin.name}</div>)}
    </section>
  );
};

export default Coins;
