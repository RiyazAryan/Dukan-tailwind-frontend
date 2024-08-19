export function TopNav(){
    return(
        <div className="flex justify-between p-2">
            <div className="flex">
                    <div className="text-xl font-semibold">
                        Payouts
                    </div>
                    <div className="mt-2 ml-1 flex justify-center pl-3"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-4" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div className="hidden sm:text-grey-700 sm:text-[12px] sm:p-1.5 sm:block">
                        How it works
                    </div>
            </div>
            <div className=" w-[25%]">
                <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-full bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z">
                        </path>
                    </svg>
                    <input type="text" placeholder="Search features, tutorials, etc." className="bg-transparent outline-none w-full"/>
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="pr-3">
                        <button className="rounded-full bg-[#E5E5E5] p-2"><div className="rounded"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4F4f4F" className="size-5">
                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        </button>
                    </div>
                    <div className="pr-5">
                        <button className="rounded-full bg-[#E5E5E5] p-2"><div className="rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="#4F4f4F" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4F4F4F" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}