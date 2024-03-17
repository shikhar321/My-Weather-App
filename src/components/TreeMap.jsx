import { useMemo } from "react";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import useModal from "../hooks/useModal";

const colors = ["#e85252", "#6689c6"];

export const Treemap = ({ width, height, data }) => {
  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value);
  }, [data]);

  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
  var colorScale = d3
    .scaleOrdinal()
    .domain(firstLevelGroups || [])
    .range(colors);

  const { openModal } = useModal();

  const root = useMemo(() => {
    const treeGenerator = d3.treemap().size([width, height]).padding(4);
    return treeGenerator(hierarchy);
  }, [hierarchy, width, height]);

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name;
    return (
      <g key={leaf.id} className="no-outline">
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={colorScale(parentName)}
          className={"opacity-80 hover:opacity-100"}
          onClick={() => openModal(leaf.data.name)}
        />
        <title className="text-2xl">
          <div className="text-2xl">
            Temperature: {leaf.data.details.temp}°C,{" "}
          </div>
          <div className="text-2xl">
            Population: {leaf.data.details.population}
          </div>
        </title>
        <text
          x={leaf.x0 + 5}
          y={leaf.y0 + 3}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold text-sm md:text-md lg:text-lg"
          onClick={() => openModal(leaf.data.name)}
        >
          {leaf.data.name}
        </text>
        <text
          x={(leaf.x1 + leaf.x0) / 2}
          y={(leaf.y1 + leaf.y0) / 2}
          textAnchor="start"
          fill="white"
          className="font-normal text-xs md:text-md lg:text-lg"
          onClick={() => openModal(leaf.data.name)}
        >
          {leaf.data.value} °C
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
    </div>
  );
};
