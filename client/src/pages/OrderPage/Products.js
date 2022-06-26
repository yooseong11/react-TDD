import React from 'react'

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;

    updateItemCount(name, currentValue)
  }


  return (
    <div className="mr-2 py-5">
      <img
        className="rounded w-full"
        src={`${process.env.REACT_APP_API_URL }/${imagePath}`}
        alt={`${name} product`}
      />
      <form className="flex flex-col p-1">
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          className="font-semibold border p-2"
          type="number"
          name="quantity"
          min={0}
          defaultValue={0}
          onChange={handleChange}
        />
        <button></button>
      </form>
      
    </div>
  );
};

export default Products