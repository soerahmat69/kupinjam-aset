import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import axios from "axios";
export const LineChart = ({data}) => {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const [DataChart, setData] = useState([]);
  const [labels,setlabels] = useState([])
  const [value,setcount] = useState([])

  const getData = async ()=>{
    await axios
      .get(`http://localhost:8080/driver/dashboard/${0}/${data === "3"?3:0}`)
      .then((response) => {
        const overa = response.data.data[0].DataChart;
        setData(overa);
        
      })
      .catch((error) => {
        console.log(error);
      });
     
  }
  useEffect(() => {
    setlabels([])
    setcount([])
    getData()
  }, []);
  useEffect(()=>{
    setlabels([])
    setcount([])
    if (DataChart.length > 0) {
      setlabels(prevLabels => {
        const newLabels = DataChart.map(res => res.action_date);
        return [...prevLabels, ...newLabels];
      });
      setcount(prevLabels => {
        const newLabels = DataChart.map(res => res.count);
        return [...prevLabels, ...newLabels];
      });
   
  }   
  },[DataChart])
  const options = {
    responsive: true,
    aspectRatio: 6 / 6,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
    },
  };

  const datass = {
    labels,
    datasets: [
      {
        fill: true,
        label: "peminjam",
        data: value.map((e) => e),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  console.log(value)
  return <Line options={options} data={datass} />;
};
