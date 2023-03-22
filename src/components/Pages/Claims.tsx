import React, {useEffect} from "react";
import {
    Address,
    erc20ABI,
    useAccount,
    useContract,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite, useProvider, useSigner
} from "wagmi";
import config from "../../config";
import {BigNumber} from "ethers";
import tierABI from "../../abi/Tier.json"
import redeemCoinABI from "../../abi/RedeemCoin.json"
import redeemNFTABI from "../../abi/RedeemNFT.json"
import {useAllowance} from "../../hook/allowance";


const UpgradeTier = () => {
    const {data: signer} = useSigner()
    const {approve, canApprove} = useAllowance({
        tokenAddress: config.tokenAddress,
        spenderAddress: config.tierAddress
    })


    const tierSc = useContract({
        address: config.tierAddress,
        abi: tierABI,
        signerOrProvider: signer
    })


    const onRedeemUpgradeTier = async () => {
        await approve()
        await tierSc?.upgradeTier()
    }


    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://i.pinimg.com/originals/5d/7e/39/5d7e39c0398db798ae95728dc0a2d12c.png"
                         alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">Upgrade member card</h2>
                <ul>
                    <li>SILVER = 10000 pts</li>
                    <li>GOLD = 200000 pts</li>
                    <li>WISDOM = 9000000 pts</li>
                </ul>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" disabled={!canApprove}
                            onClick={onRedeemUpgradeTier}>Redeem
                    </button>
                </div>
            </div>
        </div>
    )
}
const RedeemCoin = () => {
    const {approve, canApprove} = useAllowance({
        tokenAddress: config.tokenAddress,
        spenderAddress: config.redeemCoinAddress
    })
    const {data: signer} = useSigner()
    const redeemCoinSc = useContract({
        address: config.redeemCoinAddress,
        abi: redeemCoinABI,
        signerOrProvider: signer
    })

    const onRedeemBnb = async () => {
        await approve();
        redeemCoinSc?.redeem();
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img
                src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-binance-coin-bnb-token-symbol-cryptocurrency-logo-png-image_4863491.png"
                alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">Get BNB</h2>
                <p>
                    9999 Pts = 0.0005 tBNB
                </p>
                <div className="card-actions justify-end">
                    <button onClick={onRedeemBnb} className="btn btn-primary">Redeem</button>
                </div>
            </div>
        </div>
    )
}


const RedeemNFT = () => {
    const {approve, canApprove} = useAllowance({
        tokenAddress: config.tokenAddress,
        spenderAddress: config.redeemNFTAddress
    })
    const {data: signer} = useSigner()
    const sc = useContract({
        address: config.redeemNFTAddress,
        abi: redeemNFTABI,
        signerOrProvider: signer
    })

    const onRedeem = async () => {
        await approve();
        sc?.Redeem();
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">Get NTF1</h2>
                <p>
                    33333 Pts = 1NFT
                </p>
                <div className="card-actions justify-end">
                    <button onClick={onRedeem} className="btn btn-primary">Redeem</button>
                </div>
            </div>
        </div>
    )
}
export default function (props: React.PropsWithChildren<any>) {

    return (
        <div className="mx-[10px] my-[20px] flex flex-col gap-3">

            <UpgradeTier></UpgradeTier>
            <RedeemCoin></RedeemCoin>
            <RedeemNFT></RedeemNFT>

        </div>
    )
}