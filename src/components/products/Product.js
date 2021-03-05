import React from "react"
import "./Products.css"

export const Product = ({ products }) => (
    <section className="product">
        <h3 className="product__name">{products.name}</h3>
        <address className="product__address">{products.address}</address>
    </section>
)