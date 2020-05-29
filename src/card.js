import React, { Component } from "react";
import "./pokemon.css";

class Card extends React.Component {

  render() {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${this.props.pokeid}.png`;
    return (
      
      <div className="card">
        <img src={url} alt="Avatar" style={{ width: "100%" }}></img>
        <div className="container">
          <h4>
            <b>{this.props.name}</b>
          </h4>
          <p>{this.props.pokeid}</p>
        </div>
      </div>
     
    );
  }
}

export default Card;
