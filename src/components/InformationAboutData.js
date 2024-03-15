import { Component } from "react";
import "./InformationMeStyles.css";

class InformationAboutData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img of player" src={this.props.img1} />
          <img alt="img of player" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default InformationAboutData;
