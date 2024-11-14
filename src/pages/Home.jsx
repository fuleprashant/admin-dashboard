import React from "react";
import SimpleCharts from "../Charts/SimpleCharts";

import MultiSimpleCharts from "../Charts/MultiSimpleCharts";

const Home = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <SimpleCharts /> {/* this is the graph of month and sales ratio */}
      </div>

      <div>
        <MultiSimpleCharts />
      </div>
    </div>
  );
};

export default Home;
