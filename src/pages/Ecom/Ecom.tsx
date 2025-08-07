import ProductList from "../../components/ProductList/ProductList"
import { useState } from 'react'
export default function Ecom() {
    const [count, setCount] = useState(0)
    return (
    <>
    <h1> E-commerce</h1>
    <div>
            <ProductList/>
            <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Likes are {count}
        </button>
      </div>
    </div>
    </>
    )
}