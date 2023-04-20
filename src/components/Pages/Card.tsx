import React, {useEffect, useState} from "react";
import MembershipCard, {Tier} from "../MembershipCard";
import {useAccount, useBalance, useContractRead, useSigner} from "wagmi";
import config from "../../config";
import tierABI from "../../abi/Tier.json"
import {BigNumber} from "ethers";
import {gql, useQuery} from "@apollo/client";
import Numeral from "numeral";
import dayjs from "dayjs";


const Transaction = () => {

    const {address} = useAccount()

    const GET_TRANSACTION_HISTORY = gql`
      query TransactionHistory($address: String!) {
          transfers(
            where: {or: [{to: $address}, {from: $address}]}
            orderBy: blockNumber
            orderDirection:"desc"
          ) {
            id
            transactionHash
            from
            to
            blockTimestamp
            value
          }
        }
`;

    const {loading, error, data} = useQuery(GET_TRANSACTION_HISTORY, {
        initialFetchPolicy:"network-only",

        pollInterval : 3000,
        variables: {
            address
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("data", data.transfers)

    return <div>

        <div className="">

            {data.transfers && data.transfers.map((t: any) => {

                const txType = `${t.to}`.toUpperCase() === `${address}`.toUpperCase() ? "Receive" : "Transfer / Redeem";

                const amount = BigNumber.from(t.value).div(BigNumber.from("10").pow(18)).toString();

                const d = dayjs(new Date(t.blockTimestamp * 1000));

                return (
                    <div key={t.id} className="m-3 p-3 flex flex-row ">
                        <div className="flex flex-col">
                            <span className="text-[20px] font-bold">{txType}</span>
                            <span className="text-sm font-bold "> {txType === "Receive" ? "+" : "-" } {Numeral(amount).format('0,0.00')} Pts</span>
                            <span className="text-[10px]">{d.fromNow()} ({d.format()})</span>
                            <div className="w-[250px]">
                                <a href={`https://mumbai.polygonscan.com/tx/${t.transactionHash}`} target="_blank"><p className="text-[10px] truncate">{t.id}</p></a>
                            </div>
                        </div>

                    </div>
                )
            })}


        </div>
    </div>;
}

export default function (props: React.PropsWithChildren<any>) {

    const [userTier, setUserTier] = useState<Tier>(Tier.MEMBER)
    const {address} = useAccount()
    const balance = useBalance({
        address: address,
        token: config.tokenAddress,
        enabled: true
    })
    const {data: currentTier} = useContractRead<any, any, BigNumber>({
        address: config.tierAddress,
        abi: tierABI,
        functionName: "users",
        args: [address || '0x']
    })

    useEffect(() => {
        console.log("currentTier",currentTier?.toNumber())
        setUserTier((currentTier?.toNumber() || 0) as Tier)
    }, [currentTier])

    return (
        <div className="mx-[10px]">
            <MembershipCard
                points={balance.data?.formatted || '-'}
                tier={userTier}
            />
            <div className="mx-[10px] mt-[20px]">
                <span className="text-[20px] font-bold">Transactions</span>
            </div>
            <Transaction/>
        </div>
    )
}