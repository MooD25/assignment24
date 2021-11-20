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
            <h2 class="text-center">Best Sellers</h2>
            <section id="bestseller-productlist" >

                <div className="row mx-auto" style={{ width: "100%" }}>
                    {products.map(product => {
                        return (
                            <div class="col-sm-3">


                                <div>



                                    <Link
                                        to={`/productDetail/${product._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Figure



                                        >
                                            <Figure.Image
                                                style={{
                                                    objectFit: 'cover',
                                                    borderRadius: 55,
                                                    width: '50vw',
                                                    height: '30vh'
                                                }}

                                                src={product.photo}

                                            />
                                            <Figure.Caption>
                                                <p class="text-center">{product.productName}</p>
                                                <p class="text-center">${product.price} </p>
                                            </Figure.Caption>
                                        </Figure>
                                    </Link>


                                </div>
                            </div>




                        )

                    })}

                </div>


            </section>

        </>)
}

export default BestSeller
