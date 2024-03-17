import React, { useCallback } from "react";
import useModal from "../hooks/useModal";
import { data } from "../misc/data";
import { AiOutlineClose } from "react-icons/ai";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const Modal = () => {
  const { state, isOpen, openModal, closeModal } = useModal();

  const handleCLose = useCallback(() => {
    setTimeout(() => {
      closeModal();
    }, 300);
  }, [closeModal]);

  if (!isOpen) return null;

  let details = [];
  for (let i = 0; i < data.children.length; i++) {
    for (let j = 0; j < data.children[i].children.length; j++) {
      if (data.children[i].children[j].name === state) {
        details = data.children[i].children[j].details;
        break;
      }
    }
    if (details.length > 0) break;
  }
  const chartData = {
    labels: details.cities.map((city) => city.name),
    datasets: [
      {
        label: "Population: ",
        data: details.cities.map((city) => city.population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const chartData2 = {
    labels: details.cities.map((city) => city.name),
    datasets: [
      {
        label: "High Temperature",
        data: details.cities.map((city) => city.high),
        backgroundColor: "red",
        borderColor: "red",
      },
      {
        label: "Low Temperature",
        data: details.cities.map((city) => city.low),
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  };
  return (
    <div className="z-50 transition duration-300 bg-slate-700 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 w-full">
      <div className="relative w-[70%] rounded-md overflow-hidden">
        <div
          className={`${
            isOpen ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-white drop-shadow-md`}
        >
          <div
            className="cursor-pointer absolute top-3 right-3 h-[5%] md:w-[5%]  rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            onClick={handleCLose}
          >
            <AiOutlineClose className="text-white" size="60%" />
          </div>
          <div className="md:flex flex-row gap-[10%] justify-center">
            <PieChart chartData={chartData} />
            <LineChart chartData={chartData2} />
          </div>
          <table className="my-5 w-full">
            <thead className="">
              <tr className="text-[1rem] md:text-2xl">
                <th className="py-3" colSpan={7}>
                  Data about cities in {state}
                </th>
              </tr>
            </thead>
            <tbody className="results">
              <tr className="text-[0.5rem] md:text-lg">
                <th className="text-center py-2 px-1">City</th>
                <th className="text-center py-2 px-1">Highest Temperature</th>
                <th className="text-center py-2 px-1">Lowest Temperature</th>
              </tr>
              {details.cities.map((city) => (
                <tr className="text-[0.5rem] md:text-lg">
                  <td className="text-center py-2 px-1">{city.name}</td>
                  <td className="text-center py-2 px-1">{city.high} °C</td>
                  <td className="text-center py-2 px-1">{city.low} °C</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
