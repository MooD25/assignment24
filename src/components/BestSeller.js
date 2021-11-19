import { Link } from "react-router-dom";
import React from 'react'
import { useEffect, useState } from "react"
import { Figure } from 'react-bootstrap'


const BestSeller = () => {
    const [products, setProducts] = useState([{}]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?bestSeller=yes`)
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
            <section id="bestseller-productlist">
                <div>
                    {products.map(product => {
                        return (
                            <>
                                {/* <figure class="figure">
                                    <img src={product.photo} class="figure-img img-fluid rounded" alt="" />
                                    <figcaption class="figure-caption">
                                        <p>Prod Name: {product._id}</p>
                                        <p>Prod Price: {product.price} </p>
                                    </figcaption>
                                </figure> */}
                                <Link
                                    to={`/productDetail/${products._id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Figure
                                    >
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={product.photo}

                                        />
                                        <Figure.Caption>
                                            <p>{product.productName}</p>
                                            <p>{product.price} </p>
                                        </Figure.Caption>
                                    </Figure>
                                </Link>



                            </>
                        )
                    })}
                </div>
            </section>
            )
        </>)
}

export default BestSeller
