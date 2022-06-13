import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Options from "./Options";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:5000/${orderType}`);
      console.log(response.data);
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

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  const orderTypeKorean = orderType === "products" ? "상품" : "옵션";

  return (
    <>
      <h2 className="text-lg">{orderTypeKorean}</h2>
      <div>
        <p>가격: {orderDatas.pricePerItem[orderType]}</p>
      </div>
      <div className="py-4">{optionItems}</div>
      <div>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </div>
    </>
  );
};

export default Type;
