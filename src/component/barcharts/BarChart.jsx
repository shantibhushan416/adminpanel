
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
    { label: "1-Jan-18", value: 12 },
    { label: "1-Jan-19", value: 20 },
    { label: "1-Jan-20", value: 15 },
    { label: "1-Jan-21", value: 25 },
    { label: "1-Jan-22", value: 45 },
    { label: "1-Jan-23", value: 65 },
    { label: "1-Jan-24", value: 35 }
  ];


const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 5;

const colors = {
  axis: "#E4E4E4",
  bars: "#15AD13"
};
const SVGHeight = 250;
const SVGWidth = 500;

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const innerHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const innerWidth = SVGWidth - 2 * GRAPH_MARGIN;

    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(1);

    const maxValue = d3.max(data, (d) => d.value);
    const yScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, innerHeight]);

    // Draw bars with rounded corners
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label) - GRAPH_BAR_WIDTH / 2)
      .attr("y", (d) => SVGHeight - yScale(d.value))
      .attr("width", GRAPH_BAR_WIDTH)
      .attr("height", (d) => yScale(d.value))
      .attr("fill", "green")
      .attr("rx", 3) // Set the x-axis corner radius
      .attr("ry", 3); // Set the y-axis corner radius

    // Draw x-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${SVGHeight})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain")
      .remove();

    console.log(yScale(12));
  }, [data]);

  return <svg ref={svgRef} width={SVGWidth} height={SVGHeight + 30}></svg>;
};

export default BarChart;
