import React, { useEffect, useState } from 'react'

const Products = ({ className }) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        async function loadProducts() {
            try {
                const response = await fetch("http://localhost:8080/store");
                if (!response.ok) {
                    throw new Error("Erro ao buscar produtos");

                }
                const data = await response.json();

                setProducts(data)
            } catch (error) {
                console.error(error)
            }

        }

        loadProducts()

    }, [])


    return (
        <>
        

        <div className="product-container">
          
            {products.map(prod => (
                <div key={prod.id} className={className}>
                    <img src={prod.url} alt="Imagens de doces artesanais" />
                    <span>{prod.name}</span>
                    <span>{prod.price}</span>
                    <button>Comprar</button>
                </div>
            ))}
            </div>
        </>
    )
}

export default Products