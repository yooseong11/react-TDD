import React, { useEffect, useState } from "react";

const Products = ({ name, imagePath, updateItemCount, price }) => {
    const [value, setValue] = useState(0);

    
    const handleChange = (event) => {
        const currentValue = event.target.value;
        setValue(parseInt(currentValue));
        updateItemCount(name, currentValue);
    };

    const onClickPlusBtn = function(e) {
        updateItemCount(name, value + 1)
        setValue((prev) => prev + 1);
    };

    return (
        <div className="mr-2 py-5">
            <img
                className="rounded w-full"
                src={`${process.env.REACT_APP_API_URL}/${imagePath}`}
                alt={`${name} product`}
            />
            <div className="flex flex-col p-1">
                <label htmlFor={name}>{name}</label>
                <p className="font-bold">{price}원</p>
                <input
                    id={name}
                    className="font-semibold border p-2"
                    type="number"
                    name="quantity"
                    value={value}
                    min={0}
                    onChange={handleChange}
                />
                <button data-testid={`${name}PlusBtn`} onClick={onClickPlusBtn}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Products;
