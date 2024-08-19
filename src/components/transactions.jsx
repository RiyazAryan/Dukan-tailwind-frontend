export function Transactions(){
    const payouts=22;
    const refunds=6;
    return (
        <div className="bg-[#FAFAFA] p-4">
            <div className="font-semibold text-2xl pb-5">
                Transactions | This Month
            </div>
            <div className="flex">
                <div>
                    <button className="bg-[#E6E6E7] border border-grey-500 text-[#8E8D90] rounded-full p-1 pr-3 pl-3">
                        Payouts({payouts})
                    </button>
                </div>
                <div className="pl-5">
                    <button className="bg-[#126FB4] border border-grey-500 text-white rounded-full p-1.5 pr-3 pl-3">
                        Refunds({refunds})
                    </button>
                </div>
            </div>
        </div>
    )
}