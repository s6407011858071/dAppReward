import MembershipCard, {Tier} from "../MembershipCard";
import React from "react";

const CardWrapper = (props: React.PropsWithChildren<any>) => {
    return (
        <div className="mx-3">
            {props.children}
        </div>
    );
}

const Home = () => {
    return (
        <div>
            <div className="home-section-1-bg text-white h-[320px] pt-10">
               <div className="flex flex-col items-center">
                   <span className="text-5xl font-bold">Privileged</span>
                   <span className="text-4xl font-medium">Reward point reedem</span>
                   <div className="pl-3 tracking-tighter leading-5 text-center">
                       It is a long established fact that a reader will be distracted by the readable content of a page
                       when looking at its layout.
                   </div>
               </div>
            </div>
            <div className="flex flex-col gap-5 mx-4">
                <div>
                    <CardWrapper>
                        <MembershipCard tier={Tier.WISDOM}></MembershipCard>
                    </CardWrapper>
                    <div className="mt-3 mx-4">
                        <span className="font-bold">Wisdom Infinite</span>
                        <p className="pt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        </p>
                    </div>
                </div>
                <div>
                    <CardWrapper>
                        <MembershipCard tier={Tier.GOLD}></MembershipCard>
                    </CardWrapper>
                    <div className="mt-3 mx-4">
                        <span className="font-bold">Gold Unlimited</span>
                        <p className="pt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        </p>
                    </div>
                </div>

                <div>
                    <CardWrapper>
                        <MembershipCard tier={Tier.SILVER}></MembershipCard>
                    </CardWrapper>
                    <div className="mt-3 mx-4">
                        <span className="font-bold">Platinum Privileged</span>
                        <p className="pt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home