import React from 'react'

import './productList.css'

import Product from '../Product/Product'

import { products } from '../data'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & Inspire. It's Lama
                </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et, debitis quis dolore excepturi provident corporis soluta alias enim nam aliquid quo, velit maiores incidunt.
                </p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
