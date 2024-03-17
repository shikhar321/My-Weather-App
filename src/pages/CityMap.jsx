import React from "react";
import { Treemap } from "../components/TreeMap";
import { data } from "../misc/data";
import { useWindowSize } from "../hooks/useWindowSize";
import Modal from "../components/Modal";

const CityMap = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="container my-2">
      <Modal />
      <Treemap
        data={data}
        width={(width * 99) / 100}
        height={(height * 90) / 100}
      />
    </div>
  );
};

export default CityMap;
