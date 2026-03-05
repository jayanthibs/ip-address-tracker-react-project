function DisplayIpAddress({data}){

 if (!data) return null;

    return(
        <>
        <div className="grid grid-cols-4 gap-[10px] w-full max-w-[700px] border-none z-1 p-10 mx-auto rounded-lg absolute bg-white translate - [-50%] top-65 left-120">
            <div className="flex flex-col border-r-2">
              <span className="">IP ADDRESS</span>
              <span id="ip-address" className="value">{data.ip}</span>
            </div>

            <div className="flex flex-col border-r-2">
              <span className="">LOCATION</span>
              <span id="location" className="value">{data.location.city}, {data.location.region} {data.location.postalCode}</span>
            </div>

            <div className="flex flex-col border-r-2">
              <span className="">TIMEZONE</span>
              <span id="timezone" className="">{data.location.timezone}</span>
            </div>

            <div className="flex flex-col">
              <span className="label">ISP</span>
              <span id="isp" className="value">{data.isp}</span>
            </div>
          </div>

        </>
    )
}
export default DisplayIpAddress;