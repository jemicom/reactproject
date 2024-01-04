import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MyLIneChart = ({ coin }) => {
  const [charData, setCharData] = useState();

  useEffect(() => {
    const data = [
      {
        name: "price",
        value: coin.quotes.USD.price,
      },
      {
        name: "ath_price",
        value: coin.quotes.USD.ath_price,
      },
      {
        name: "volume_24",
        value: coin.quotes.USD.volume_24h,
      },
    ];
    setCharData(data);
  }, []);

  return (
    <div>
      <LineChart
        width={200}
        height={150}
        data={charData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 10 }}
        />
      </LineChart>
    </div>
  );
};

export default MyLIneChart;
