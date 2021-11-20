import React from 'react'

const Footer = () => {
    return (

        <footer className="text-center text-lg-start bg-light text-muted">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>



                <div>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>
                            </h6>
                            <p>
                                We hope you enjoyed our store!
                            </p>
                        </div>


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="/" className="text-reset">Electronics</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Clothing</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Shoes</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Toys</a>
                            </p>
                        </div>


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="/" className="text-reset">Help</a>
                            </p>
                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Toronto</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                mdillon1@myseneca.ca
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 12345678910</p>
                            <p><i className="fas fa-print me-3"></i> + 12345678910</p>
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4" >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="/">Marco Dillon incorporated</a>
            </div>

        </footer>

    )
}

export default Footer
