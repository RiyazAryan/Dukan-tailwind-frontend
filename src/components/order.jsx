import { josndata } from "../store/atom"
import { useRecoilValue } from "recoil"

export function Orders(){
    const data=useRecoilValue(josndata)
    return(
        <div className="border border-grey-500 bg-white p-2">
            <div className="flex justify-between">
                <div className=" w-[25%]">
                    <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-full bg-white border border-grey-500 text-[#808080] rounded sm:flex-grow">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z">
                            </path>
                        </svg>
                        <input type="text" placeholder="Order ID or transaction ID" className="bg-transparent outline-none w-full"/>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div className="pr-3">
                            <button className="rounded bg-white p-2 border border-grey-300"><div className="rounded flex"><div className="pr-2">Sort</div><div className="mt-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8984" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg></div>
                            </div>
                            </button>
                        </div>
                        <div className="pr-5">
                            <button className="rounded bg-white p-2 border border-grey-300"><div className="rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8984" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3 rounded">
                <table className="w-full table-auto">
                    <thead className="bg-[#E6E6E7]">
                    <tr>
                        <td className="font-normal text-left p-2 text-grey-300">OrderID</td>
                        <td className="font-normal text-left p-2 text-grey-300">Status</td>
                        <td className="font-normal text-left p-2 text-grey-300">TransactionID</td>
                        <td className="font-normal text-left p-2 text-grey-300">Refund Date</td>
                        <td className="font-normal text-right p-2 text-grey-300">Order Amount</td>
                    </tr>
                    </thead>
                        {data.map((item) => (
                        <Listing key={item.id} list={item} />
                    ))}
                    </table>
            </div>
        </div>
    )
}


function Listing({list}){
    return(
        
            <tbody>
                <tr>
                    <td className="text-[#126FB4] p-2">{list.orderId}</td>
                    <td className="text-grey-500 p-2"><div className="flex"><div className="mr-2">
                    <span
                        className={list.status === "Successful" ? "bg-green-500 inline-block w-2.5 h-2.5 rounded-full" : "bg-[#9B9B9B] inline-block w-2.5 h-2.5 rounded-full"}>
                            </span>
                    </div>
                    {list.status}</div></td>
                    <td className="text-grey-500 p-2">{list.transactionID}</td>
                    <td className="text-grey-500 p-2">{list.refundDate}</td>
                    <td className="text-grey-500 p-2 text-right">{list.orderAmount}</td>
                </tr>
            </tbody>      
    )
}