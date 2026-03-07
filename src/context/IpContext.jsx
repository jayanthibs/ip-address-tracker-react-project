import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const IpContext = createContext();

export function IpProvider({ children }) {
  const key = import.meta.env.VITE_API_KEY;

  const [ipToSearch, setIpToSearch] = useState("");

  const { data, loading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${key}${
      ipToSearch ? `&ipAddress=${ipToSearch}` : ""
    }`
  );

  return (
    <IpContext.Provider
      value={{
        data,
        loading,
        error,
        ipToSearch,
        setIpToSearch,
      }}
    >
      {children}
    </IpContext.Provider>
  );
}

export function useIpContext() {
  return useContext(IpContext);
}