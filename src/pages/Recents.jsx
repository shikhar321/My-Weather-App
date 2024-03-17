import React from "react";

const Recents = () => {
  let records = [];
  if (localStorage.getItem("Recents") !== null) {
    records = JSON.parse(localStorage.getItem("Recents"));
    records = records.slice(-5);
    records = records.reverse();
  }
  return (
    <div className="container w-[100%] px-[2%]">
      {records.length === 0 ? (
        <p>No searches yet</p>
      ) : (
        <div className="w-full mr-[2%] my-[2%] py-2 px-5 rounded-xl bg-white/30">
          <table className="my-5 w-full">
            <thead className="">
              <tr className="text-[1rem] md:text-5xl">
                <th className="py-3" colSpan={7}>
                  5 Recent Searches
                </th>
              </tr>
            </thead>
            <tbody className="results">
              <tr className="text-[0.5rem] md:text-lg">
                <th className="text-center py-2 px-1">City</th>
                <th className="text-center py-2 px-1">Temperature</th>
                <th className="text-center py-2 px-1">Description</th>
                <th className="text-center py-2 px-1">Feels Like</th>
                <th className="text-center py-2 px-1">Humidity</th>
                <th className="text-center py-2 px-1">Pressure</th>
                <th className="text-center py-2 px-1">Wind Speed</th>
              </tr>
              {records.map((record) => (
                <tr className="text-[0.5rem] md:text-lg">
                  <td className="text-center py-2 px-1">{record.name}</td>
                  <td className="text-center py-2 px-1">
                    {record.main.temp}{" "}
                    {record.unit === "metric"
                      ? "°C"
                      : record.unit === "imperial"
                      ? "°F"
                      : "K"}
                  </td>
                  <td className="text-center py-2 px-1">
                    {record.weather[0].description
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </td>
                  <td className="text-center py-2 px-1">
                    {record.main.feels_like}{" "}
                    {record.unit === "metric"
                      ? "°C"
                      : record.unit === "imperial"
                      ? "°F"
                      : "K"}
                  </td>
                  <td className="text-center py-2 px-1">
                    {record.main.humidity} %
                  </td>
                  <td className="text-center py-2 px-1">
                    {record.main.pressure} hPa
                  </td>
                  <td className="text-center py-2 px-1">
                    {record.wind.speed}{" "}
                    {record.unit !== "imperial" ? "meter/sec" : "miles/hour"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Recents;
