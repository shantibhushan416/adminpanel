import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const GRAPH_MARGIN = 20;

const WaveForm = ({data,yAxisKey,xAxisKey}) => {
  const svgRef = useRef();
  const [svgDimension, setSvgDimension] = useState(null);

  useEffect(() => {
    const svgDimension = svgRef.current?.getBoundingClientRect();
    if (!svgDimension?.height) return;

    setSvgDimension(svgDimension);
    const { height: SVGHeight, width: SVGWidth } = svgDimension;

    const innerHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const innerWidth = SVGWidth - 2 * GRAPH_MARGIN;

    const svg = d3.select(svgRef.current);

    const curve = d3.curveCardinal.tension(0);
    
    const wave = d3
      .line()
      .x((d) => xScale(d[xAxisKey]))
      .y((d, i) => yScale(d[yAxisKey]))
      .curve(curve);

    // Define x and y scales
    const maxXValue = d3.max(data, (d) => d[xAxisKey]);
    const minXValue = d3.min(data, (d) => d[xAxisKey]);
    const xScale = d3
      .scaleLinear()
      .domain([minXValue, maxXValue])
      .range([0, innerWidth]);

    const maxYValue = d3.max(data, (d) => d[yAxisKey]);
    const yScale = d3
      .scaleLinear()
      .domain([0, maxYValue])
      .range([0, innerHeight]);
    // Append the path element to the SVG
    svg
      .append("path")
      .datum(data)
      .attr("d", wave)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", "3px")
      .attr("transform", `translate(${GRAPH_MARGIN},${GRAPH_MARGIN / 2})`);

    // Add x-axis with ticks and labels
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${GRAPH_MARGIN},${SVGHeight - GRAPH_MARGIN})`
      )
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain")
      .remove();
  }, [svgDimension?.height,data]);

  return <svg  key={JSON.stringify(data)} ref={svgRef} style={{ width: "100%", height: "100%" }}></svg>;
};

export default WaveForm;
