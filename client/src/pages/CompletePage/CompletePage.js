import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

const CompletePage = ({ setStep}) => {
  const orderDatas = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect((orderDatas) => {
    orderCompleted(orderDatas);
  }, []);

  const orderCompleted = async (orderDatas) => {
    try {
      const response = await axios.post(
        `htttp://localhost:5000/order`,
        orderDatas
      );
      setOrderHistory(response.data);
			setLoading(false)
    } catch (error) {
      setError(true);
    }
  };
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  if (loading) {
		<div>loading</div>
  }

	const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));
  return (
    <div>
      <p>주문이 성공했습니다.</p>
      <h3>지금까지 모든 주문</h3>
      <table>
        <tbody>
          <tr>
            <th>주문번호</th>
            <th>주문가격</th>
          </tr>
          {orderTable}
        </tbody>
      </table>
      <button
        onClick={() => {
          setStep(0);
        }}
      ></button>
    </div>
  );
};

export default CompletePage;
