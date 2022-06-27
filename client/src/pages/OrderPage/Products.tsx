import React, { ChangeEvent, useState } from "react";

export interface ProductsProps {
    name: string;
    imagePath: string;
    updateItemCount: (name: string, value: number) => void;
    price: number;
}

const Products = ({
    name,
    imagePath,
    updateItemCount,
    price,
}: ProductsProps) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentValue = parseInt(event.target.value);
        setValue(currentValue);
        updateItemCount(name, currentValue);
    };

    const onClickPlusBtn = function () {
        setValue((prev) => prev + 1);
        updateItemCount(name, value + 1);
    };
    const onClickMinusBtn = function () {
        if (value <= 0) {
            return;
        }

        setValue((prev) => prev - 1);
        updateItemCount(name, value - 1);
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
                <div>
                    <button
                        data-testid={`${name}MinusBtn`}
                        onClick={onClickMinusBtn}
                    >
                        -
                    </button>
                    <input
                        id={name}
                        className="font-semibold border p-2"
                        type="number"
                        name="quantity"
                        value={value}
                        min={0}
                        onChange={handleChange}
                    />
                    <button
                        data-testid={`${name}PlusBtn`}
                        onClick={onClickPlusBtn}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
