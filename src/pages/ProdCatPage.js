import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Figure } from 'react-bootstrap'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProdCatPage = (props) => {
    let { category } = useParams();
    console.log("category : " + category);

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products?category=${category}`)
            .then((response) => response.json())
            .then((json) => {
                setProducts(json.data);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    }, [category]);
    return (
        <div>
            <Header />
            <h2 class="text-center">Categories</h2>
            <section id="bestseller-productlist">
                <div>
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
            <Footer />
        </div>
    );
};

export default ProdCatPage;