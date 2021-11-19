import React from 'react'

import { useEffect, useState } from "react"

const ProdDetailPage = (props) => {
    let id = window.location.pathname.split("/")[2]
    console.log("id: " + id)

    const [product, setProduct] = useState([]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}${id}`)
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
            <h3>{product.productName} costs {product.price}</h3>
        </div>
    )
}

export default ProdDetailPage
