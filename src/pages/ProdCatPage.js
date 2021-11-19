import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProdCat from "../components/ProdCat";
import Footer from "../components/Footer";

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
            <ProdCat products={products} category={category} />
            <Footer />
        </div>
    );
};

export default ProdCatPage;