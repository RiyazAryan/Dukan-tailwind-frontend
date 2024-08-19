export const Rvnuecard=({
    title,
    showWarning,
    orderCount,
    amount
})=>{
    return(
        <div className="bg-inherit text-inherit rounded shadow-md p-4">
            <div className="text-grey-700">
                <div className="flex">
                    <div className="p-1">{title}</div><div className="mt-2.5 ml-1 flex justify-center "><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-4" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                </div>
                </div>
            </div>
            <div className="flex justify-between font-semibold">
                <div className="text-2xl">
                    ₹ {amount}
                </div>
                    {title=="Amount Pending" && orderCount ? (<div className="flex">
                        <div className="text-[#136EB4] underline underline-offset-1">
                            {orderCount} Orders
                        </div>
                        <div className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="size-5" stroke="#136EB4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                        </div>
                    </div>):orderCount ?(<div className="flex">
                        <div className="underline underline-offset-1">
                            {orderCount} Orders
                        </div>
                        <div className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="size-5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                        </div>
                        </div>):null}
        </div>
        </div>

    )
}