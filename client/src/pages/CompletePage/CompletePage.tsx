import React, { useEffect, useContext, useState } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";
import { postOrder } from "../../api/orderApi"

export interface orderProps {
  orderNumber : string;
  price: string;
}

function CompletePage({
    setStep,
}: {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [OrderDatas, , resetOrderDatas] = useContext(OrderContext);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        orderCompleted(OrderDatas);
    }, [OrderDatas]);

    const orderCompleted = async (OrderDatas: any) => {
        const response = await postOrder(OrderDatas);
        console.log(response);

        setOrderHistory(response!.data);
        setLoading(false);
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    const orderTable = orderHistory.map((item: orderProps) => (
        <tr key={item.orderNumber}>
            <td>{item.orderNumber}</td>
            <td>{item.price}</td>
        </tr>
    ));

    const handleClick = () => {
        resetOrderDatas();
        setStep(0);
    };

    if (loading) {
        return <div>loading</div>;
    } else {
        return (
            <div style={{ textAlign: "center" }}>
                <h2>주문이 성공했습니다.</h2>
                <h3>지금까지 모든 주문</h3>
                <table style={{ margin: "auto" }}>
                    <tbody>
                        <tr>
                            <th>주문 번호</th>
                            <th>주문 가격</th>
                        </tr>
                        {orderTable}
                    </tbody>
                </table>
                <button onClick={handleClick}>첫페이지로</button>
            </div>
        );
    }
}

export default CompletePage;
