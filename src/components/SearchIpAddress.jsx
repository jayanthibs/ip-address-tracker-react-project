import arrowIcon from "../assets/images/icon-arrow.svg";
import bgDesktop from "../assets/images/pattern-bg-desktop.png";
import bgMobile from "../assets/images/pattern-bg-mobile.png";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import DisplayIpAddress from "./DisplayIpAddress";
import MyMap from "./MyMap";
import useValidateIPAddress from "../hooks/useValidateIPAddress";

const key = import.meta.env.VITE_API_KEY;

function SearchIpAddress() {
  const [searchData, setSearchData] = useState("");
  const [ipToSearch, setIpToSearch] = useState("");
  const [validationError, setValidationError] = useState("");

  const { data, loading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      ipToSearch ? `&ipAddress=${ipToSearch}` : ""
    }`,
  );

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedInput = searchData.trim();

    const { errors, isValid } = useValidateIPAddress(trimmedInput);
    setValidationError(errors);

    if (!isValid) return; // prevent empty search
    setIpToSearch(trimmedInput);
    setValidationError("");
    setSearchData("");
  }

  return (
    <>
      {/* Search Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-cover bg-center h-90 md:h-70 z-0"
        style={{
          backgroundImage:
            window.innerWidth >= 768 ? `url(${bgDesktop})` : `url(${bgMobile})`,
        }}
      >
        <h1 className="text-center text-3xl  p-10 text-white font-semibold">
          IP Address Tracker
        </h1>
        <div className="flex justify-center">
          <label htmlFor="searchIp" className="sr-only">
            Search IP Address
          </label>
          <input
            className=" w-full max-w-md bg-white rounded-s-2xl px-6 py-3"
            type="search"
            id="searchIp"
            value={searchData}
            placeholder="Search for any IP address or domain"
            onChange={(e) => {
              setSearchData(e.target.value);
              setValidationError("");
            }}
          />

          <button
            type="submit"
            className="py-5 px-5 bg-black rounded-e-2xl flex items-center justify-center "
          >
            <img alt="Arrow Icon" src={arrowIcon} className="h-5 w-5" />
          </button>
        </div>
        {validationError && (
          <p className="text-red-500 text-center mt-2 ">{validationError}</p>
        )}
      </form>

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
