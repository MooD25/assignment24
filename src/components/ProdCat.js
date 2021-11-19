import React from 'react'
import { useEffect, useState } from "react"
import { Figure } from 'react-bootstrap'
import { Link } from "react-router-dom";

const ProdCat = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/allCategories`)
            .then(response => response.json())
            .then(json => {

                console.log(json.data);
                setCategories(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`);
            })

    }, [])
    let img;
    return (
        <>
            <section id="bestseller-productlist">
                <div>
                    {categories.map(category => {
                        if (category === "toys")
                            img =
                                "https://media.istockphoto.com/photos/dreamy-scene-wooden-toys-concept-with-objects-that-belong-to-against-picture-id1284284079?b=1&k=20&m=1284284079&s=170667a&w=0&h=YKuXSthTY9wYEgdVehAaQSgrsw4BIpGngKxNJFlDZ04="
                        else if (category === "shoes")
                            img =
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdPg8dQp4qQORN3Eq55wmjLlIGfk55B2clQ&usqp=CAU";
                        else if (category === "electronics")
                            img =
                                "https://media.istockphoto.com/photos/woman-shopping-at-black-friday-picture-id1280247722?b=1&k=20&m=1280247722&s=170667a&w=0&h=v5WdmkjoEC1k0icBgwBc9x_vRg0AtRIWnf20hVwtzCk=";
                        else if (category === "clothing")
                            img =
                                "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

                        return (
                            <>
                                <Link to={`/cat/${category}`} style={{ textDecoration: "none" }}>
                                    <Figure>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={img}

                                        />
                                        <Figure.Caption>
                                            <p class="text-center"> {category}</p>
                                        </Figure.Caption>
                                    </Figure>
                                </Link>


                            </>
                        )
                    })}
                </div>
            </section>
        </>)
}

export default ProdCat