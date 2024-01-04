import React from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  // const coinId = useParams().coinId;
  const { coinId } = useParams();
  // const {id} = req.params
  const style = {
    height: "1000px",
    background: "yellow",
  };
  return <section style={style}>CoinDetail {coinId}</section>;
};

export default CoinDetail;
