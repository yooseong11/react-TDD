import React, { useContext } from 'react'
import Type from './Type'
import { OrderContext } from '../../contexts/OrderContext';

const OrderPage = ({ setStep }) => {
  const [orderDatas] = useContext(OrderContext);

  return (
    <div className="max-w-3xl m-auto">
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div>
        <Type orderType="options" />
      </div>
      <div>
        <p>Total Price : {orderDatas.totals.total}</p>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded px-2 py-1"
          onClick={() => setStep(1)}
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default OrderPage