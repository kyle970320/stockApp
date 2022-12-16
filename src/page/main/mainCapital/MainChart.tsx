import React, { PureComponent, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { rerenderList } from "../../../recoil/atom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import useCallStockList from "../../../hooks/useCallStockList";
const MainChart = () => {
  const stateRecoilRerenderList = useRecoilValue(rerenderList);
  const [stateStockList] = useCallStockList(false);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={stateStockList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" fill="white" />
        <XAxis dataKey="stockName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="누적구매액" fill="lightblue" />
        <Bar dataKey="누적판매액" fill="lightcoral" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MainChart;
