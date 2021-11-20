const ProductDetail = (props) => {
    return !props ? (
        <div>
            <h2>Product: {props.products.productName}</h2> <br />
            <h6>
                <i>--None found--</i>
            </h6>
        </div>
    ) : (
        <div className="row" style={{ width: "100%" }}>
            <h2 class="text-center">{props.products.productName}</h2> <br />
            <div className="col-xxl-3 col-md-3 mx-auto">
                <div>
                    <div className="card text-center">
                        <img
                            className="card-img-top"
                            src={props.products.photo}
                            alt="Card"
                        //   style={{ height: "198.77px" }}
                        />
                        <div className="card-body">
                            <h6 className="card-text">{props.products.productName}</h6>
                            <p className="card-text">
                                Description: {props.products.description}
                            </p>
                            <p className="card-text">
                                Category: {props.products.category}
                            </p>
                            <p className="card-text">${props.products.price}</p>
                            <p className="card-text">Quantity: {props.products.quantity}</p>
                            <p className="card-text">
                                Bestseller: {props.products.bestSeller ? "Yes!" : "No"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;