import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product";
import "./Products.css"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="products">
      {
        products.map(products => {
          return <Product key={products.id} products={products} />
        })
      }
    </div>
  )
}