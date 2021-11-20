import React from 'react'
import { useEffect, useState } from "react"
import Header from '../components/Header'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import { Figure } from 'react-bootstrap'

const ProdListing = () => {
    const [products, setProducts] = useState([{}]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
            .then(response => response.json())
            .then(json => {

                console.log(json.data);
                setProducts(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`);
            })

    }, [])
    return (
        <>
            <Header />
            <h2>Products</h2>
            <section id="bestseller-productlist">
                <div className="row mx-auto" style={{ width: "100%" }}>
                    {products.map(product => {
                        return (
                            <>


                                <div className="col-xxl-3 col-md-3">
                                    <Link
                                        to={`/productdetail/${product._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Figure>
                                            <Figure.Image
                                                style={{
                                                    objectFit: 'cover',
                                                    borderRadius: 55,
                                                    width: '50vw',
                                                    height: '30vh'
                                                }}

                                                alt="171x180"
                                                src={product.photo}

                                            />
                                            <Figure.Caption>
                                                <p class="text-center"> {product.productName}</p>
                                                <p class="text-center">${product.price} </p>
                                            </Figure.Caption>

                                        </Figure>
                                    </Link>
                                </div>

                            </>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>)
}

export default ProdListing
