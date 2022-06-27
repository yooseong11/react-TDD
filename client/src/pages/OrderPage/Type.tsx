import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Options from './Options';
import Products from './Products';
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../contexts/OrderContext';

export interface TypeProps {
  orderType: string
}

  export interface itemProps {
      name: string;
      imagePath: string;
      price: number;
  }
const Type = ({ orderType }: TypeProps) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderDatas, updateItemCount] = useContext(OrderContext);

    useEffect(() => {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async (orderType: string) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/${orderType}`
            );
            setItems(response.data);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }

    const ItemComponents = orderType === "products" ? Products : Options;

    const optionItems = items.map((item: itemProps) => (
        <ItemComponents
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            price={item.price}
            updateItemCount={(itemName, newItemCount) =>
                updateItemCount(itemName, newItemCount, orderType)
            }
        />
    ));

    const orderTypeKorean = orderType === "products" ? "상품" : "옵션";

    return (
        <>
            <div className="bg-zinc-200 mt-8 py-3 px-8 rounded">
                <h2 className="text-lg">{orderTypeKorean}</h2>
                <p>
                    <span className="text-lg font-bold">
                        {orderDatas.pricePerItem[orderType]}
                    </span>{" "}
                    <span>₩</span>
                </p>
            </div>
            <div className="py-4">{optionItems}</div>
            <div className="border-b-2 pb-8 text-right">
                <p>
                    {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
                </p>
                <p className="text-lg font-bold ">
                    {orderDatas.totals[orderType]}
                </p>
            </div>
        </>
    );
};

export default Type;
