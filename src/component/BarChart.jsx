import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 10;

const BarChart = ({ data, xAxisKey, yAxisKey }) => {
  const svgRef = useRef();
  const [svgDimension, setSvgDimension] = useState(null);

  useEffect(() => {
    const svgDimension = svgRef.current?.getBoundingClientRect();
    if (!svgDimension?.height) return;

    setSvgDimension(svgDimension);
    const { height: SVGHeight, width: SVGWidth } = svgDimension;

    if (!data || data.length === 0) return;

    const innerHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const innerWidth = SVGWidth - 2 * GRAPH_MARGIN;

    const svg = d3.select(svgRef.current);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[xAxisKey]))
      .range([0, innerWidth])
      .padding(1);

    const maxValue = d3.max(data, (d) => d[yAxisKey]);
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
      .attr("x", (d) => xScale(d[xAxisKey]) - GRAPH_BAR_WIDTH / 2)
      .attr("y", (d) => SVGHeight - GRAPH_MARGIN - yScale(d[yAxisKey]))
      .attr("width", GRAPH_BAR_WIDTH)
      .attr("height", (d) => yScale(d[yAxisKey]))
      .attr("fill", "green")
      .attr("rx", 5)
      .attr("ry", 5);

    svg
      .append("g")
      .attr("transform", `translate(0,${SVGHeight - GRAPH_MARGIN})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain")
      .remove();
  }, [svgDimension?.height,data]);

  return <svg key={JSON.stringify(data)} ref={svgRef} style={{ width: "100%", height: "100%" }}></svg>;
};

export default BarChart;
