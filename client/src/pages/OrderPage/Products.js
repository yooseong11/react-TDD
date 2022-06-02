import React from 'react'

const Products = ({name, imagePath}) => {
	return (
    <div className='p-4'>
      <img
        className="rounded max-w-xs "
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form className='flex justify-between p-1'>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          className="font-semibold border"
          type="number"
          name="quantity"
          min={0}
          defaultValue={0}
        />
      </form>
    </div>
  );
}

export default Products