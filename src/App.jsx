import React from 'react'
import ProductList from './components/ProductList'
import { Provider } from "react-redux"
import { store } from './store/store'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
      </div>
    </Provider>
  )
}

export default App