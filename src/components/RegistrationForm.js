import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const onCreateAccount = (event) => {

        event.preventDefault();


        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {

                alert(json.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""

                })

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }



    return (
        <section id="register-section">

            <div className="container">

                <h1>Register</h1>

                {/* <form action="" onSubmit={onCreateAccount}>

                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={formData.firstName} onChange={(event) => {
                            setFormData({ ...formData, firstName: event.target.value });
                        }} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={formData.lastName} onChange={(event) => {
                            setFormData({ ...formData, lastName: event.target.value });
                        }} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={formData.email} onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                        }} />
                    </div>


                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" valeu={formData.password} onChange={(event) => {
                            setFormData({ ...formData, password: event.target.value });
                        }} />
                    </div>


                    <div className="form-control">
                        <button className="btn" type="submit">Create Account</button>
                    </div>

                </form> */}


                <Form action="" onSubmit={onCreateAccount}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" id="firstName" value={formData.firstName} onChange={(event) => {
                            setFormData({ ...formData, firstName: event.target.value });
                        }} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" id="lastName" value={formData.lastName} onChange={(event) => {
                            setFormData({ ...formData, lastName: event.target.value });
                        }} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" id="email" value={formData.email} onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                        }} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" id="password" valeu={formData.password} onChange={(event) => {
                            setFormData({ ...formData, password: event.target.value });
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>

        </section>
    )
}

export default RegistrationForm