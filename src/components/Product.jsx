import React from 'react'
import { useDispatch } from 'react-redux'
import { isChecked } from '../feature/productsSlice'

// get the product where send from proudct list 
const Product = ({ product }) => {
  const dispatch = useDispatch()
  const handelChecked = (e, id) => {
    console.log(e.target.checked, id)
    dispatch(isChecked({ id, isChecked: e.target.checked }))
  }
  return (
    <div className='border w-[200px] my-1 p-2'>
      <div>
        {/* render product name */}
        <h2>Name: {product.name}</h2>
        {/* render product price */}
        <div>Price: ${product.price}</div>
        {/* render product weight */}
        <div>Weight: {product.weight}gm</div>
        <input checked={product.isChecked} onChange={(e) => handelChecked(e, product.id)} type="checkbox" /> Next to item
        <br />
      </div>
    </div>
  )
}

export default Product