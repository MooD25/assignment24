
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import { useEffect, useState } from "react"

const ProdDetailPage = () => {

    let slug = window.location.pathname.split("/");
    const id = slug[2];
    console.log("id: " + id)

    const [products, setProduct] = useState([]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${id}`)
            .then(response => response.json())
            .then(json => {

                console.log(json.data);
                setProduct(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`);
            })

    }, [id])

    return (
        <div>
            <Header />
            <ProductDetail products={products} />
            <Footer />
        </div>

    )
}

export default ProdDetailPage
