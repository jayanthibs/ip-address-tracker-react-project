import { useIpContext } from "../context/IpContext";

function DisplayIpAddress() {

  const { data } = useIpContext();
  
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[90%] max-w-4xl 
    p-6 lg:p-8 mx-auto rounded-lg bg-white shadow-lg 
    absolute left-1/2 -translate-x-1/2 top-52 z-50 
    text-center lg:text-left">

      <div className="flex flex-col lg:border-r lg:border-gray-300 lg:pr-4">
        <span className="text-gray-400 font-semibold text-sm pb-2">IP ADDRESS</span>
        <span className="font-bold text-xl">{data.ip}</span>
      </div>

      <div className="flex flex-col lg:border-r lg:border-gray-300 lg:px-4">
        <span className="text-gray-400 font-semibold text-sm pb-2">LOCATION</span>
        <span className="font-bold text-xl">
          {data.location.city}, {data.location.region} {data.location.postalCode}
        </span>
      </div>

      <div className="flex flex-col lg:border-r lg:border-gray-300 lg:px-4">
        <span className="text-gray-400 font-semibold text-sm pb-2">TIMEZONE</span>
        <span className="font-bold text-xl">UTC {data.location.timezone}</span>
      </div>

      <div className="flex flex-col lg:px-4">
        <span className="text-gray-400 font-semibold text-sm pb-2">ISP</span>
        <span className="font-bold text-xl">{data.isp}</span>
      </div>

    </div>
  );
}

export default DisplayIpAddress;