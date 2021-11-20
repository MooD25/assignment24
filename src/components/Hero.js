import React from 'react'
import { Carousel } from 'react-bootstrap'

const Hero = (props) => {
  return (
    <Carousel style={{ width: "100%" }}>
      <Carousel.Item style={{ height: "450px" }} interval={1000}>
        <img style={{ height: "450px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHM1fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>PS5</h3>
          <p style={{ color: "black" }}>Much better than Xbox!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "450px" }} interval={500}>
        <img style={{ height: "450px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1632633174743-ba3e685cc7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Iphone 13 Pro MAX</h3>
          <p style={{ color: "black" }}>So many differences from the 12.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "450px" }}>
        <img style={{ height: "450px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1522336284037-91f7da073525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Great Hair Dryer</h3>
          <p style={{ color: "black" }}>Makes hair less wet.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
