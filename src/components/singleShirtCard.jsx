import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./singleShirtCard.scss";

//shirt prop example:
// {
//     img: [white, blue],
//     name: "ShirtF",
//     price: "4.5 $",
//     colors: ["blue", "white"],
//     sizes: ["XXL", "XL","M"]
// }
export default function SingleShirtCard({ shirt }) {
  const white = shirt.img[0];
  const blue = shirt.img[1];
  const [colorShirt, setColorShirt] = useState(white);
  const [size, setSize] = useState("");

  return (
    <div className="shirtCard m-3">
      <Image
        fluid
        src={colorShirt}
        alt="sample white shirt"
        className="shirtCardImg mb-4"
      />
      <h3>{shirt.name}</h3>
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
      <div className="d-flex flex-wrap shirtCardSizes justify-content-center">
        {shirt.sizes.map((size) => (
          <Button
            className="shirtCardSize shadow-none px-3 mx-3 mb-2 btnSecondary"
            key={toString(Math.floor(Math.random() * 999)) + size}
            onClick={() => setSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
      {size ? <p>Your chosen size is {size}</p> : null}
      <div className="d-flex flex-wrap justify-content-around">
        <Link to="/shirtA">
          <Button className="btnPrimary shadow-none">See the shirt</Button>
        </Link>
      </div>
    </div>
  );
}
