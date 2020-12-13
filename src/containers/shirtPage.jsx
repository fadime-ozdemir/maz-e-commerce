import React, { useState } from "react";
import white from "./laura-chouette-5qRgJ8ISEpA-unsplash.jpg";
import blue from "./karla-hernandez-vbWFwQ_NPjI-unsplash.jpg";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Modal,
} from "react-bootstrap";
import "./shirtPage.scss";

const shirt = {
  img: [white, blue],
  name: "ShirtA",
  price: "4.5 $",
  colors: ["blue", "white"],
  sizes: ["XXL", "XL", "M"],
  stock: 5,
};

const similarShirts = [
  {
    img: [white, blue],
    name: "ShirtA",
    price: "4.5 $",
    colors: ["blue", "white"],
    sizes: ["XXL", "XL", "M"],
  },
  {
    img: [white, blue],
    name: "ShirtA",
    price: "4.5 $",
    colors: ["blue", "white"],
    sizes: ["XXL", "XL", "M"],
  },
  {
    img: [white, blue],
    name: "ShirtA",
    price: "4.5 $",
    colors: ["blue", "white"],
    sizes: ["XXL", "XL", "M"],
  },
];

export default function ShirtPage() {
  const white = shirt.img[0];
  const blue = shirt.img[1];
  const [colorShirt, setColorShirt] = useState(white);
  const [size, setSize] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Anon",
      review:
        "Vestibulum eleifend, massa quis tincidunt scelerisque, augue leo hendrerit nisl, ullamcorper laoreet nisi diam sed dolor. Vivamus nec velit posuere, pulvinar est vel, eleifend tellus. Fusce finibus dui ut magna vestibulum aliquet. Suspendisse sed dui in sem luctus lobortis. Nulla sit amet tortor dignissim, semper massa eget, dictum nisl. Vivamus luctus aliquam risus eu viverra.",
    },
  ]);
  const renderReviews = () =>
    reviews.map((review) => (
      <div key={review.name + toString(Math.floor(Math.random() * 999))}>
        <h5>{review.name}</h5>
        <p>{review.review}</p>
      </div>
    ));

  const [showAddCart, setShowAddCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState(shirt.stock);
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    setShowAddCart(true);
    setCart((prevState) => [...prevState, shirt]);
    setStock((prevState) => {
      if (stock === 0) {
        return 0;
      }
      return prevState - quantity;
    });
    setQuantity(1);
  };

  const [show, setShow] = useState(false);
  const [fav, setFav] = useState([]);
  const addFav = () => {
    setShow(true);
    setFav((prevState) => [...prevState, shirt]);
  };

  const [inputs, setInputs] = useState({ name: "", review: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevState) => [...prevState, inputs]);
    setInputs({ name: "", review: "" });
  };

  return (
    <Container className="singlePage">
      <Row>
        <Col>
          <Image
            fluid
            className="singlePageImg my-5"
            src={colorShirt}
            alt="sample product"
          />
        </Col>
        <Col className="flex-column my-5 singlePageDetails">
          <h2>{shirt.name}</h2>
          <p>{shirt.price}</p>
          <div className="d-flex justify-content-center">
            <div
              className="shirtCardImg-white"
              onClick={() => setColorShirt(white)}
            ></div>
            <div
              className="shirtCardImg-blue"
              onClick={() => setColorShirt(blue)}
            ></div>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {shirt.sizes.map((size, index) => (
              <Button
                className="shirtCardSize shadow-none px-3 mx-3 mb-2 btnSecondary"
                key={size + toString(Math.floor(Math.random() * 999))}
                onClick={() => setSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
          {size ? <p>Your chosen size is {size}</p> : null}
          <div className="mx-3">
            <label for="quantity" className="mr-3">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={stock}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <Modal
            size="sm"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="fav"
          >
            <Modal.Header closeButton>
              <Modal.Title id="fav">Saved in favourites</Modal.Title>
            </Modal.Header>
          </Modal>
          <Button onClick={addFav} className="btnSecondary shadow-none mr-1">
            Add to favourite
          </Button>
          <Modal
            size="lg"
            show={showAddCart}
            onHide={() => setShowAddCart(false)}
            aria-labelledby="addChart"
          >
            <Modal.Header closeButton>
              <Modal.Title id="addChart">
                Go to the <Link to="/cart" className="primaryLink">Cart</Link>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You may also like</p>
              <div className="d-flex" >
                {similarShirts.map((shirt, index) => (
                  <Link
                    to="/"
                    className="primaryLink mx-2"
                    key={
                      index +
                      shirt.name +
                      toString(Math.floor(Math.random() * 999))
                    }
                  >
                    <Image src={shirt.img[0]} fluid alt="sample shirt" />
                    <h5>{shirt.name}</h5>
                  </Link>
                ))}
              </div>
            </Modal.Body>
          </Modal>
          <Button
            onClick={addToCart}
            disabled={stock === 0 ? true : false}
            className="ml-1 btnPrimary shadow-none"
          >
            Add to cart
          </Button>
        </Col>
      </Row>
      <Row>
        <h3>Reviews</h3>
        {reviews ? renderReviews() : null}
      </Row>
      <Row>
        <Col md={4} className="px-0 mx-2">
          <Form>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your name, please"
                name="name"
                value={inputs.name}
                onChange={(e) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Your review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="review"
                value={inputs.review}
                onChange={(e) =>
                  setInputs({ ...inputs, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="btnPrimary shadow-none mb-5"
            >
              Add your review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
