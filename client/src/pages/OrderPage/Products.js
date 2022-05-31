import React from 'react'

const Products = ({name, imagePath}) => {
	return (
    <div>
      <img src={`http://localhost:5000/${imagePath}`} alt={`${name} product`} />
      <form>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
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