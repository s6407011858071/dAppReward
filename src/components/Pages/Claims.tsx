import React from "react";


export default function (props: React.PropsWithChildren<any>) {
    return (
        <div className="mx-[10px] my-[20px] flex flex-col gap-3">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Coupon!</h2>
                    <p>Lorem ipsum dolor sit amet, </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Redeem</button>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Token</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Redeem</button>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Token</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Redeem</button>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Token</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Redeem</button>
                    </div>
                </div>
            </div>

        </div>
    )
}