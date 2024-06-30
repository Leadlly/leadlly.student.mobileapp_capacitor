"use client";

import dynamic from "next/dynamic";
const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  return (
    <>
      <div className="flex-1">
        <Charts
          type="bar"
          width={"100%"}
          height={140}
          series={[
            {
              name: "Revisions",
              data: [44, 55, 57, 56, 61, 58, 63],
            },
            {
              name: "Quizzes",
              data: [35, 41, 36, 26, 45, 48, 52],
            },
          ]}
          options={{
            chart: {
              type: "bar",
              height: 350,
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "40%",
                borderRadius: 1.5,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 3,
              colors: ["transparent"],
            },
            xaxis: {
              categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
            fill: {
              colors: ["#9654F4", "#56CFE1"],
            },
            legend: {
              show: false,
            },
          }}
        />
      </div>

      <div className="w-36 hidden md:block">
        <div className="flex items-center gap-2">
          <span className=" block w-3 h-3 rounded bg-primary"></span>
          <span className="text-xs capitalize">Revision Sessions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className=" block w-3 h-3 rounded bg-[#72EFDD]"></span>
          <span className="text-xs capitalize">Quizzes</span>
        </div>
      </div>
    </>
  );
};

export default BarChart;
