import React from "react";

const MembershipCard = () => {
    return (
        <div className="card membership-card-v1 mt-[20px] h-[190px] shadow-xl p-[20px]">
            <div className="text-white tracking-normal text-[22px] font-bold pt-[1px]">
                Platinum
            </div>
            <div className="text-white tracking-normal text-[12px] font-bold pt-[10px]">
                Current balance
            </div>
            <div className="text-white font-semibold tracking-wide text-[25px] pt-[2px] ">
                123,324.32 Points
            </div>

            <div className="text-white font-bold tracking-wider text-[10px] pt-[37px] ">
                0xa6f79B60359f141df90A0C745125B131cAAfFD12
            </div>
        </div>);
}

const Transaction = () => {
    return <div>
        <div className="mx-[10px] mt-[20px]">
            <span className="text-[20px] font-bold">Transactions</span>
        </div>
        <div className="">
            <div className="m-3 p-3 flex flex-row justify-between">
                <div className="flex flex-col">
                    <span className="text-[20px] font-bold">Receive</span>
                    <span className="text-[10px]">37 mins ago (Feb-11-2023 02:38:12 PM +UTC)</span>
                    <div className="w-[250px]">
                        <p className="text-[10px] truncate">0x23651e64a1da00e15bbbcdeee9e87f863c57a51de581a1a67ac737ac0907f9c4</p>
                    </div>
                </div>
                <h2 className="card-title">+320pts</h2>
            </div>
            <div className="m-3 p-3 flex flex-row justify-between">
                <div className="flex flex-col">
                    <span className="text-[20px] font-bold">Redeem</span>
                    <span className="text-[10px]">37 mins ago (Feb-11-2023 02:38:12 PM +UTC)</span>
                    <div className="w-[250px]">
                        <p className="text-[10px] truncate">0x23651e64a1da00e15bbbcdeee9e87f863c57a51de581a1a67ac737ac0907f9c4</p>
                    </div>
                </div>
                <h2 className="card-title">-120pts</h2>
            </div>
        </div>
    </div>;
}

export default function (props: React.PropsWithChildren<any>) {
    return (
        <div className="mx-[10px]">
            <MembershipCard/>
            <Transaction/>
        </div>
    )
}