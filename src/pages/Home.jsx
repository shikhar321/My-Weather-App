import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [tempUnit, setTempUnit] = useState("metric");

  function handleChange1(event) {
    setCity(event.target.value);
  }

  function handleChange2(event) {
    setTempUnit(event.target.value);
  }

  function handleChange3(event) {
    let replaced = city.trim().replace(" ", "+");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${replaced}&APPID=8b9363a09f791d8e7e76bc9b00398dc9&units=${tempUnit}`
      )
      .then((res) => {
        setData(res.data);
        setUnit(tempUnit);
        let records = [];
        if (localStorage.getItem("Recents") !== null) {
          records = JSON.parse(localStorage.getItem("Recents"));
        }
        let data = res.data;
        data["unit"] = tempUnit;
        records.push(data);
        localStorage.setItem("Recents", JSON.stringify(records));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    setCity("");
  }

  return (
    <div className="container relative top-[5%] flex flex-col items-center text-center gap-10 w-full">
      <div className="relative flex">
        <input
          value={city}
          className="rounded-md px-[4%] py-[6%] w-[100%] outline-none opacity-35"
          placeholder="City"
          onChange={handleChange1}
        />
        <select
          aria-label="Default select example"
          className="rounded-md px-[3%] py-[6%] ml-2 outline-none opacity-50"
          onChange={handleChange2}
        >
          <option value="metric">°C</option>
          <option value="imperial">°F</option>
          <option value="standard">K</option>
        </select>
        <button
          className="px-[3%] py-[6%] ml-2 opacity-50"
          onClick={handleChange3}
        >
          <FaSearch />
        </button>
      </div>
      {data && (
        <>
          <div className="top">
            <div className="city text-4xl">{data.name}</div>
            <div className="temp text-[5rem]">
              {data.main.temp}{" "}
              {unit === "metric" ? "°C" : unit === "imperial" ? "°F" : "K"}
            </div>
            <div className="desc text-3xl">
              {data.weather[0].description
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
          </div>
          <div className="bottom flex py-2 px-4 mx-[10%] rounded-lg gap-10 bg-white/20 font-medium">
            <div className="feels text-[1.2rem]">
              <p className="font-normal">
                {data.main.feels_like}{" "}
                {unit === "metric" ? "°C" : unit === "imperial" ? "°F" : "K"}
              </p>
              Feels like
            </div>
            <div className="humidity text-[1.2rem]">
              <p className="font-normal">{data.main.pressure} hPa</p>Pressure
            </div>
            <div className="humidity text-[1.2rem]">
              <p className="font-normal">{data.main.humidity} %</p>Humidity
            </div>
            <div className="wind text-[1.2rem]">
              <p className="font-normal">
                {data.wind.speed}{" "}
                {unit !== "imperial" ? "meter/sec" : "miles/hour"}
              </p>
              Wind Speed
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
