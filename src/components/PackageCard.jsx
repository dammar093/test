import React from 'react'

const PackageCard = ({ index, items }) => {
  //calculate total price of package
  const totalPrice = items.orders.reduce((acc, item) => acc + item.price, 0)
  //calculate total weith of package
  const totalWeight = items.orders.reduce((acc, item) => acc + item.weight, 0)
  // declare and initialize the courier price
  let courierPrice = 0;
  // check condition for courier price for diffrent weidht
  if (totalWeight < 200) {
    courierPrice = 5
  }
  else if (totalWeight < 500) {
    courierPrice = 10
  }
  else if (totalWeight < 1000) {
    courierPrice = 15
  }
  else {
    courierPrice = 20;
  }
  return (
    <div className='border p-2 my-1'>

      {
        totalPrice <= 250 ? (
          <div>
            <h3><b>Package{index + 1}</b></h3>
            <div>
              {
                items.orders.map(item => (
                  <span>{item?.name}, </span >
                ))
              }
            </div>
            <div>Total Price: ${totalPrice}</div>
            <div>Total Weight: {totalWeight}gm</div>
            <div>Courier Price: ${courierPrice} </div>
          </div>
        )
          :
          <div> Total price of package must be less then $250  <b>Your package total price is ${totalPrice}</b> </div>
      }
    </div>
  )
}

export default PackageCard