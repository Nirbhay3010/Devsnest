import React from 'react'

function Card(props) {
    return (
    <div className="container">
      <img
        src={props.img}
        className="imagetag"
        alt="meme"
      ></img>
      <h1>{props.heading}</h1>
    </div>
    )
}

export default Card
