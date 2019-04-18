import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer 
} from "recharts";
import styled from "styled-components";

import { GraphContainer, GraphHeader } from "./graphStyles.js";

const Chart = styled.div`
  height: 350px;
  width: 99%;
  @media (max-width: 780px) {
    height: 300px;
  }
`;

const RadarChartContainer = props => {
  /* ------------------------------ Data Rendering ------------------------------ */
  const getData = () => {
    if(props.data.length){
      return props.data.map((c, i) => {
        return { category: c.category, actions: c.count, fullMark: 100 };
      });
    }
    else{
      return [
        {category: "No Data", actions: 0, fullMark: 100 },
        {category: "No Data", actions: 0, fullMark: 100 },
        {category: "No Data", actions: 0, fullMark: 100 },
        {category: "No Data", actions: 0, fullMark: 100 },
      ]
    }
  }

  const data = getData();

  return (
    <GraphContainer>
      {/* ------------------------------ Header ------------------------------ */}
      <GraphHeader bottomBorder>
        <div>
          <h2>Best Categories</h2>
          <h3>based on all actions</h3>
        </div>
      </GraphHeader>
      {/* ------------------------------ Radar Chart ------------------------------ */}
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            outerRadius={125}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="actions"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Chart>
    </GraphContainer>
  );
};

export default RadarChartContainer;
