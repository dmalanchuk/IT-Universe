import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'


const ProductPage = () => {

  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")

  // fetch('https://reqres.in/api/users?page=2') тут просто потрібно змінити ссилку

  useEffect(() => {
    fetch('').then(res => res.json()).then(json => {
      setProduct(json.data)
    }).catch(err => {
      console.warn(err);
    })
      .finally(() => setLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <header className="header">
      <Navbar />
      <div className="container">
        <div className="product-main">
          <Product
            searchValue={searchValue}
            onChangeSearchValue={onChangeSearchValue}
            isLoading={isLoading}
            items={product}
          />
        </div>
      </div>
    </header>
  )
}

export default ProductPage