import React, { useEffect, useState } from 'react'
// import productslist from data
import products from '../data/productsList'
import Product from '../components/Product'
import { addProducts } from '../feature/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import PackageCard from './PackageCard'

const ProductList = () => {
  const [packages, setPackges] = useState([{ orders: [{ id: 50, name: "Item 50", price: 12, weight: 20, isChecked: true }] }])
  const dispatch = useDispatch()
  // intialieze products in state productlist
  const productsList = useSelector(state => state.products.products);
  console.log(productsList);
  // send productslist in a global state
  useEffect(() => {
    dispatch(addProducts(products))
  }, [dispatch])

  // create package of items
  const handelPackage = () => {
    const placeItem = productsList.filter(item => item.isChecked == true);
    setPackges(prev => [...prev, { orders: placeItem }])
    console.log(packages.orders);
  }
  return (
    <>
      <div className='w-full flex justify-center my-4'>
        <div className='w-/12'>
          <h1>Product List</h1>
          {
            // map the products list item vertical list
            productsList.map(product => (
              // call the product component and send product as props
              <Product key={product.id} product={product} />
            ))
          }
          <button onClick={handelPackage} className='p-1 px-4 bg-blue-500 hover:bg-blue-900 text-white w-fit'>Palce Order</button>
        </div>

      </div>
      <div className='flex justify-center'>
        <div >
          <h2>Pacakges</h2>
          {

            packages.map((items, index) => (
              // map the packageCard
              <div key={index}>
                <PackageCard index={index} items={items} />
              </div>
            ))

          }
        </div>
      </div>
    </>
  )
}

export default ProductList