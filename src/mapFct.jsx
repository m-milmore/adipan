import React from "react";

class MapFct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "-",
    };
  }

  // handleClick = (e) => this.setState({ name: e.target.value });
  handleClick = (e) => this.setState({ name: e.target.innerText });

  render() {
    const planets = [
      { label: "Mercury" },
      { label: "Venus" },
      { label: "Earth" },
      { label: "Mars" },
      { label: "Jupiter" },
      { label: "Saturn" },
      { label: "Uranus" },
      { label: "Neptune" },
    ];

    const { name } = this.state;

    return (
      <div>
        <div> {name} </div>
        <ul>
          {planets.map((planet) => (
            <li>
              <a href="#!" onClick={this.handleClick}> {planet.label} </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MapFct;
