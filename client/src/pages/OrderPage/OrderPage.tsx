import React, { useContext } from "react";
import Type from "./Type";
import { OrderContext } from "../../contexts/OrderContext";

const OrderPage = ({ setStep }: any) => {
    const [orderDatas] = useContext(OrderContext);

    return (
        <div className="max-w-xl pb-20 m-auto text-left bg-white">
            <h1 className="text-2xl py-4 bg-rose-300 text-white px-4 font-pixel">
                meltigmemore
            </h1>
            <div className="px-4">
                <Type orderType="products" />
            </div>
            <div className="px-4">
                <Type orderType="options" />
            </div>
            <div className="fixed bottom-0 left-0 p-4 border-t border-t-gray-200 bg-white w-full shadow-2xl">
                <div className="flex justify-between items-center">
                    <p>
                        Total Price : {orderDatas.totals.total} ({" "}
                        {orderDatas.totals["products"]} +{" "}
                        {orderDatas.totals["options"]} )
                    </p>
                    <button
                        className="bg-zinc-200 hover:bg-slate-300 rounded px-2 py-1"
                        onClick={() => setStep(1)}
                    >
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
