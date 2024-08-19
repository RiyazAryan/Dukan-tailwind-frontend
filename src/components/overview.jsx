import { Rvnuecard } from "./rvnuecard";

export function Overview(){
    const date= "Today, 4:00pm"
    return(
       <div>
            <div className="flex justify-between p-5">
                <div className="font-semibold  text-2xl">
                    Overview
                </div>
                <div className="pr-2 w-[12%] border border-gray-300 rounded-md text-lg bg-[#FFFFFF] text-grey-700">
                    <select className="p-1 w-full font-normal">
                        <option>This Month</option>
                        <option>Last 6 Months</option>
                    </select>

                </div>
            </div>
            <div className="grid grid-cols-1 pl-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="ml-2 text-white bg-[#136EB4] hover:bg-[#0D4F81] rounded-[8px]">
                    <Rvnuecard title={"Next Payout"} amount={"2,312.23"} orderCount={23}/>
                    <div className="p-3 flex justify-between bg-[#0D4F81] rounded-[8px]">
                        <div className="">
                            Next Payment Date:
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white">
                        <Rvnuecard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
                    </div>
                </div>
                <div className="mr-2">
                    <div className="bg-white">
                        <Rvnuecard title={"Amunt Processed"} amount={"23,92,312.19"}/>
                    </div>
                </div>
        </div>
      </div>
    )
}