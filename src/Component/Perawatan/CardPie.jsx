import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement,   CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend, } from "chart.js";
export const CardPie = ({titlePie,LabelsData,dataArray}) => {
    ChartJS.register(ArcElement,  CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend);
        const options = {
            responsive: true,
            aspectRatio: 6/5,
            plugins: {
              legend: {
                position: 'top',
                display:false
              },
            },
          };
      const data = {
        labels: LabelsData,
        datasets: [
          {
            label: titlePie,
            data: dataArray,
            backgroundColor: [
              "rgba(255, 155, 80, 1)",
              "rgba(37, 43, 72, 1)",
              "rgba(255, 255, 255, 1)",
            ],
            borderColor: [
              "rgba(37, 43, 72, 0.5)",
              "rgba(37, 43, 72, 0.5)",
              "rgba(37, 43, 72, 0.5)",
            ],
            borderWidth: 1,
          },
        ],
      };
   
  return (
    <div className=" py-[22px]  px-[22px]   grow   flex flex-col  font-[poppins] h-[394px] rounded-[15px] border border-solid border-[#252b4880] shadow-[0px_4px_4px_#00000040]">
             <p className="   font-normal text-[#252b48] text-[13px] tracking-[0.60px] leading-[normal]">
              # Rekap 1 tahun (sekarang - 01/01/2022)
            </p>
              <h1 className="mt-3 flex-none text-center font-bold text-[#252b48] text-[26px] tracking-[0] leading-[normal]">
                {titlePie}
              </h1>
              <div className="w-[250px] mx-auto my-5">
                <Pie options={options} data={data} />
              </div>
              <ul className="gap-3  flex justify-center items-end bottom w-full h-full  ">
                <li className=" flex gap-1 items-center">
                  <div className=" w-[20px] h-[20px]   bg-[#FF9B50] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <h2 className=" font-semibold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    60%
                  </h2>
                </li>
                <li className=" flex gap-1 items-center">
                  <div className=" w-[20px] h-[20px]  bg-[#252B48] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <div className="font-semibold text-[#252B48] text-[20px] tracking-[0] leading-[normal]">
                    40%
                  </div>
                </li>
                <li className="flex items-center gap-1">
                  <div className=" w-[20px] h-[20px]   bg-[#F0F0F0] rounded-[9.5px] border border-solid border-[#252b48]" />
                  <div className="font-semibold text-[#252b48] text-[20px] tracking-[0] leading-[normal]">
                    10%
                  </div>
                </li>
              </ul>
            </div>
  )
}
