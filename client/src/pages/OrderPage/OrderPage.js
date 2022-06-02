import React from 'react'
import Type from './Type'

const OrderPage = () => {
	return (
    <div className='max-w-3xl m-auto'>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div>
        <Type orderType="options" />
      </div>
      <div>
        <p>Total Price :</p>
        <button className="bg-slate-200 hover:bg-slate-300 rounded px-2 py-1">주문</button>
      </div>
    </div>
  );
}

export default OrderPage