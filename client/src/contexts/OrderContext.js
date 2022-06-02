import { createContext, useEffect, useMemo, useState } from "react";

const OrderContext = createContext();


export function OrderContextProvider(props) {
	const [orderCounts, setOrderCounts] = useState({
		products: new Map(),
		options: new Map(),
	})

	const value = useMemo(() => {
		function updateItemCount(itemName, newItemCount, orderType) {
			const newOrderCounts = {...orderCounts};
		
			const orderCountsMap = orderCounts[orderType];
			orderCountsMap.set(itemName, parseInt(newItemCount));
			
			setOrderCounts(newOrderCounts);
		}
		
		return [{...orderCounts, total}, updateItemCount]
	}, [orderCounts, total])

	const [total, setTotal] = useState({
		products: 0,
		options: 0,
		total: 0
	})

	const pricePerItme = {
		products: 1000,
		options: 500
	}

	const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;
    for (const count of orderCounts[orderType].value()) {
      optionCount += count;
    }

    return optionCount * pricePerItme[orderType];
  };

	useEffect(() => {
		const productsTotal = calculateSubtotal('products', orderCounts);
		const optionsTotal = calculateSubtotal('options', orderCounts);
		const total =  productsTotal + optionsTotal
		
		setTotal({
			products: productsTotal,
			options: optionsTotal,
			total
		});

	}, [orderCounts])
	

	return <OrderContext.Provider value={value} {...props} />
}