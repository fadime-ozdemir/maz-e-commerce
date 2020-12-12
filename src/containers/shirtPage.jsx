import React, { useState } from "react";
import white from "./laura-chouette-5qRgJ8ISEpA-unsplash.jpg";
import blue from "./karla-hernandez-vbWFwQ_NPjI-unsplash.jpg";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Modal,
} from "react-bootstrap";
const shirt = {
  img: [white, blue],
  name: "ShirtA",
  price: "4.5 $",
  colors: ["blue", "white"],
  sizes: ["XXL", "XL", "M"],
};

export default function ShirtPage() {
  const white = shirt.img[0];
  const blue = shirt.img[1];

  const [reviews, setReviews] = useState(
    [
        {
          name: "Anon",
          review:
            "Vestibulum eleifend, massa quis tincidunt scelerisque, augue leo hendrerit nisl, ullamcorper laoreet nisi diam sed dolor. Vivamus nec velit posuere, pulvinar est vel, eleifend tellus. Fusce finibus dui ut magna vestibulum aliquet. Suspendisse sed dui in sem luctus lobortis. Nulla sit amet tortor dignissim, semper massa eget, dictum nisl. Vivamus luctus aliquam risus eu viverra.",
        },
      ]
  );
  const renderReviews = () =>
    reviews.map((review) => (
      <div key={review.name + toString(Math.floor(Math.random() * 999))}>
        <h5>{review.name}</h5>
        <p>{review.review}</p>
      </div>
    ));

  const [show, setShow] = useState(false);
  const [fav, setFav] = useState([]);
  const addFav = () => {
    setShow(true);
    setFav((prevState) => [...prevState, shirt]);
  };

  const [inputs, setInputs] = useState({ name: "", review: "" });
    console.log(fav);

  const handleSubmit = (e)=>{
      e.preventDefault();
      setReviews(prevState=>[...prevState, inputs]);
      setInputs({name:"", review:""});
  }
  return (
    <Container>
      <Row>
        <Col>
          <Image fluid src={white} alt="sample product" />
        </Col>
        <Col className="flex-column">
          <h2>{shirt.name}</h2>
          <p>{shirt.price}</p>
          <div className="d-flex">
            <div className="shirtCardImg-white"></div>
            <div className="shirtCardImg-blue"></div>
          </div>
          <div className="d-flex flex-wrap">
            {shirt.sizes.map((size, index) => (
              <Button key={size + toString(Math.floor(Math.random() * 999))}>{size}</Button>
            ))}
          </div>
          <Modal
            size="sm"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Saved in favourites
              </Modal.Title>
            </Modal.Header>
          </Modal>
          <Button onClick={addFav}>Add to favourite</Button>
          <Button>Add to chart</Button>
        </Col>
      </Row>
      <Row>
        <h3>Reviews</h3>
        {reviews ? renderReviews() : null}
      </Row>
      <Row>
        <Col md={4} className="px-0">
          <Form>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your name, please"
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Your review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="review"
                value={inputs.review}
                onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
              Add your review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
