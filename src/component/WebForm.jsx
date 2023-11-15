import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const WaveForm = () => {
  const svgRef = useRef();
  const [svgDimension,setSvgDimension] = useState(null);

  useEffect(()=>{
    setSvgDimension(svgRef.current?.getBoundingClientRect())
  },[svgRef.current])

  console.log(svgDimension)

  useEffect(() => {
    if(!svgDimension) return;
    const svg = d3.select(svgRef.current);

    // Generate random data for the wave
    const data = d3.range(0, 10).map(() => Math.floor(Math.random() * 50));

    // Define the curve function
    const curve = d3.curveCardinal.tension(0);

    // Define the wave function with the curve
    const wave = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d, i) => yScale(d))
      .curve(curve);

    // Define x and y scales
    const xScale = d3.scaleLinear().domain([0, data.length -1]).range([0, 400]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([200, 0]);

    // Append the path element to the SVG
    svg
      .append("path")
      .datum(data)
      .attr("d", wave)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", "2px")
      .attr("transform", `translate(${20},${0})`);

    // Add x-axis with ticks and labels
    svg
      .append("g")
      .attr("transform", `translate(${20},${svgDimension?.height||0})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .select(".domain")
      .remove();
  }, [svgDimension?.height]);

  return (
    <svg ref={svgRef} style={{width:"100%",height:"100%"}}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default WaveForm;

