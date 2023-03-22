import React from "react";
import Numeral from 'numeral'

export enum Tier {
    MEMBER,
    SILVER,
    GOLD,

    WISDOM

}


const MembershipCard = (props: {
    tier: Tier,
    points?: string,
}) => {

    const getTierLabel = (t?: Tier) => {
        switch (t) {
            case Tier.WISDOM:
                return "Wisdom Infinite";
            case Tier.GOLD:
                return "Gold Unlimited";
            case Tier.SILVER:
                return "Platinum Privileged";
            default:
                return "MEMBER";
        }
    }
    const getCssBg = (t?: Tier) => {
        switch (t) {
            case Tier.WISDOM:
                return "membership-card-wisdom";
            case Tier.GOLD:
                return "membership-card-gold";
            case Tier.SILVER:
                return "membership-card-silver";
            default:
                return "membership-card-member";
        }
    }


    return (
        <div className={`card mt-[20px] h-[190px] shadow-xl p-[20px] ${getCssBg(props.tier)}`}>
            <div className="text-white tracking-normal text-[22px] font-bold pt-[1px]">
                {getTierLabel(props.tier)}
            </div>
            <div className="text-white tracking-normal text-[12px] font-bold pt-[10px]">
                Current balance
            </div>
            <div className="text-white font-semibold tracking-wide text-[25px] pt-[2px] ">
                {Numeral(props.points).format('0,0.00') || '999,999.00'} Pts
            </div>
            {/*<div className="text-white font-bold tracking-wider text-[10px] pt-[1px] ">*/}
            {/*    0xa6f79B60359f141df90A0C745125B131cAAfFD12*/}
            {/*</div>*/}
        </div>);
}


export default MembershipCard;