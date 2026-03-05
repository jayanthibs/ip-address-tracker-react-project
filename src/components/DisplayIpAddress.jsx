function DisplayIpAddress({data}){

 if (!data) return null;

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] w-full max-w-3xl border-none z-1 p-10 mx-auto rounded-lg absolute bg-white translate - [-50%] top-53 left-80 font-[rubik]">
            <div className="flex flex-col border-r-2 border-gray-300 ">
              <span className="text-gray-400 font-semibold text-sm pb-2">IP ADDRESS</span>
              <span id="ip-address" className="font-black text-xl">{data.ip}</span>
            </div>

            <div className="flex flex-col border-r-2 border-gray-300 pl-2 pr-2 ">
              <span className="text-gray-400 font-semibold text-sm pb-2">LOCATION</span>
              <span id="location" className="font-extrabold text-xl">{data.location.city}, {data.location.region} {data.location.postalCode}</span>
            </div>

            <div className="flex flex-col border-r-2 border-gray-300 pl-2 pr-2 ">
              <span className="text-gray-400 font-semibold text-sm pb-2">TIMEZONE</span>
              <span id="timezone" className="font-bold text-xl">UTC {data.location.timezone}</span>
            </div>

            <div className="flex flex-col pl-2 pr-2 ">
              <span className="text-gray-400 font-semibold text-sm pb-2">ISP</span>
              <span id="isp" className="font-bold text-xl">{data.isp}</span>
            </div>
          </div>

        </>
    )
}
export default DisplayIpAddress;