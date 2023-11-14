import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function BarChart() {
  const [data] = useState([
    { label: "Apples", value: 100 },
    { label: "Bananas", value: 200 },
    { label: "Oranges", value: 50 },
    { label: "Kiwis", value: 150 },
  ]);
  const svgRef = useRef();

  const w = 700;
  const h = 300;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      //   .select("body")
      //   .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#cccccc")
      .style("padding", "50px")
      .style("margin-top", "10px")
      .style("overFlow", "visible")
      .style("border-radius", "10px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((value, i) => value.label))
      .range([0, w])
      .padding(0.5);
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data.map(({ value }) => value))])
      .range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);

    svg
      .selectAll("bar")
      .data(...data.map(({ value }) => value))
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }, [data]);

  return (
    <div style={{ alignContent: "center" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}
export default BarChart;

