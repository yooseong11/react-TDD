import React, { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext';

const SummaryPage = ({ setStep }: any) => {
  const [checked, setChecked] = useState(false);
  const [orderDatas] = useContext(OrderContext);

  const productsArray = Array.from(orderDatas.products);
  const productList = productsArray.map(([key, value]: any) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = orderDatas.options.size > 0;
  let optionsRender = null;

  if (hasOptions) {
    const optionArray = Array.from(orderDatas.options.keys());
    const optionList = optionArray.map((key: any) => <li key={key}>{key}</li>);
    optionsRender = (
      <>
        <h2>옵션: {orderDatas.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      setStep(2);
  };

  return (
    <div className="max-w-xl m-auto h-screen">
      <div className="bg-white w-96">
        <header className="text-center p-3 bg-slate-700">
          <h1 className="text-white">주문 확인</h1>
        </header>
        <div>
          <h2 className="text-red-500">
            여행 상품: {orderDatas.totals.products}
          </h2>
          <ul>{productList}</ul>
          {optionsRender}
          <form onSubmit={handleSubmit}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              id="confirm-checkbox"
            ></input>
            <label htmlFor="confirm-checkbox" className="ml-2">
              주문하려는 것을 확인하셨나요?
            </label>
            <br />
            <button className='w-full bg-blue-500 text-white p-2' disabled={!checked} type="submit">
              주문하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;