import arrowIcon from "../assets/images/icon-arrow.svg";
import bgImage from "../assets/images/pattern-bg-desktop.png";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import DisplayIpAddress from "./DisplayIpAddress";
import MyMap from "./MyMap";

const key = import.meta.env.VITE_API_KEY;

function SearchIpAddress() {
  const [searchData, setSearchData] = useState("");
  const [ipToSearch, setIpToSearch] = useState("");

  const { data, loading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      ipToSearch ? `&ipAddress=${ipToSearch}` : ""
    }`
  );

  function handleClick() {
    if (!searchData.trim()) return; // prevent empty search
    setIpToSearch(searchData);
  }

  return (
    <>
      {/* Search Section */}
      <div
        className="bg-cover h-80 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-4xl mb-8 p-10">IP Address Tracker</h1>
        <div className="flex justify-center">
          <label htmlFor="searchIp" className="sr-only">
            Search IP Address
          </label>
          <input
            className="border w-full max-w-[400px] bg-white rounded-s-lg px-4"
            type="search"
            id="searchIp"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="h-10 w-10 bg-black rounded-e-lg flex items-center justify-center"
          >
            <img alt="Arrow Icon" src={arrowIcon} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Display IP Data */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">Error fetching IP data.</p>
      )}
      {data && <DisplayIpAddress data={data} />}
      {data && <MyMap data={data} />}
    </>
  );
}

export default SearchIpAddress;
