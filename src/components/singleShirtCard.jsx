import React from 'react'
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    return (
        <div className="shirtCard">
            <Image fluid src={white} alt="sample white shirt" className="shirtCardImg"/>
            <h3>{shirt.name}</h3>
            <p>{shirt.price}</p>
            <div className="d-flex">
                <div className="shirtCardImg-white"></div>
                <div className="shirtCardImg-blue"></div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    shirt.sizes.map((size)=> <Button key={toString(Math.floor(Math.random() * 999)) + size}>{size}</Button>)
                }
            </div>
            <div className="d-flex flex-wrap">
                <Link to="/shirtA"><Button>See the shirt</Button></Link>
                <Button>Add to chart</Button>
            </div>
            
        </div>
    )
}
