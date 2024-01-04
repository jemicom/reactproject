import React, { useEffect, useState } from "react";
import CoinDetail from "./CoinDetail";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagenation from "../components/Pagenation";
import MyLIneChart from "../components/MyLIneChart";

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

  // 방법. 1
  const axiosHandle1 = async () => {
    // then(res=>res.json()) 생략
    // 데이터는 res.data 담김
    await axios({
      method: "get",
      url,
      params: { _limit: 5 },
    }).then((res) => {
      console.log(res.status, res.data.length);
      const filter = res.data.filter((coin) => coin.rank <= 100);
      setCoins(filter);
    });
  };

  // 방법. 2
  const axiosHandle2 = () => {
    axios.get(url, { timeout: 5000 }).then((res) => {
      console.log(res);
      const filter = res.data.filter((coin) => coin.rank <= 100);
      setCoins(filter);
    });
  };

  // 방법. 3
  const axiosHandle3 = async () => {
    try {
      const res = await axios(url);
      console.log(res);
      // setCoins(res.data);
      //   const data = await res.json();  필요 없음
      const filter = res.data.filter((coin) => coin.rank <= 100);
      setCoins(filter);

      const symbols = coins.map((coin) => coin.symbol);
      console.log(symbols.length);
      const distinctSymbols = new Set(symbols); // {}
      // const distinctSymbols = [...new Set(symbols)]; // {}

      setCoinSymbol([...distinctSymbols]);
      console.log(coinSymbol.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axiosHandle3();
  }, []);

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

  /*  pagenation
    전체 item 개수 : coins.length
    현재 화면에 표시할 개수 
    현재 사용하는 pager
    목록의 시작 번호
    목록의 끝 번호

 */

  // const [length, setLength] = useState(coins.length);
  const [pagePerCount, setpagePerCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * pagePerCount;
  const indexOfStart = indexOfLast - pagePerCount;
  const currentCoin = coins.slice(indexOfStart, indexOfLast);
  // console.log(indexOfLast, indexOfStart);

  return (
    <section style={style}>
      <h2> 종목 {coins.length} 개 </h2>
      {coins.length >= 1 && (
        <select onChange={selectCoinHandle}>
          <option> 코인 종목을 선택하세요. </option>
          {/* {coins.map((coin) => (
            <option key={coin.symbol}>{coin.symbol}</option>
          ))} */}

          {coinSymbol.map((symbol) => (
            <option key={symbol}>{symbol}</option>
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

      <Pagenation
        length={coins.length}
        pagePerCount={pagePerCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="card_layout">
        {coins.length <= 0
          ? "Loading..."
          : currentCoin.map((coin) => (
              <div key={coin.id} className="card">
                {coin.rank} : {coin.name}
                <MyLIneChart coin={coin} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default Coins;
