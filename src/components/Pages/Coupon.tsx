import React from "react";


export default function (props: React.PropsWithChildren<any>) {
    return (
        <div className="mx-[10px] my-[20px] flex flex-col gap-2">
            <div className="card  bg-secondary  text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Discount</h2>
                    <p>10% off for sport category</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Use</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Discount</h2>
                    <p>15% off when buy 5000THB</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Use</button>
                    </div>
                </div>
            </div>
        </div>
    )
}