import React from "react";
import SimpleCharts from "../Charts/SimpleCharts";

import MultiSimpleCharts from "../Charts/MultiSimpleCharts";
import AreaCharts from "../Charts/AreaCharts";
import PieCharts from "../Charts/PieCharts";
import RadarChart from "../Charts/RadarChart";
import SimpleBarChart from "../Charts/SimpleBarChart";
import PositiveNegative from "../Charts/PositiveNegative";

const Home = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-5">
        <div>
          <SimpleCharts /> {/* this is the graph of month and sales ratio */}
        </div>
        <div>
          <MultiSimpleCharts />
        </div>
        <div>
          <AreaCharts />
        </div>{" "}
        <div>
          <PieCharts />
        </div>
        <div>
          <RadarChart />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-10">
        <div>
          <SimpleBarChart /> {/* this is the graph of month and sales ratio */}
        </div>
        <div>
          <PositiveNegative />{" "}
          {/* this is the graph of month and sales ratio */}
        </div>
      </div>
    </div>
  );
};

export default Home;
