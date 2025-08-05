import { useEffect, useState } from "react";

const ProductList: React.FC = () => {
    interface Product {
        id: string;
        title: string;
        image: string;
        price: number;
        link: string;
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then((data: Product[]) => {
                setProducts(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {products.map(product => (
                <div key={product.id} style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                    width: '200px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                    <a href={product.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img 
                            src={`/Photos/${product.image}`}
                            alt={product.title} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                        <h3 style={{ fontSize: '16px', margin: '12px 0 8px' }}>{product.title}</h3>
                        <p style={{ fontWeight: 'bold', color: '#333' }}>${product.price.toFixed(2)}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProductList;