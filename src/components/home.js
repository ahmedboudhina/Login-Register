import React, { Component } from "react";
import { Input, Row, Button } from "reactstrap";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://mycvtheque.com/wp-content/uploads/2017/01/Article_les-nouvelles-pratiques-du-recrutement.png"
          width="1005"
          height="435"
        ></img>
        <Row className="search-bar">
          <Input type="text" placeholder="Mots Clés " />
          <Input type="text" placeholder="Emplacement(Adresse)" />
          <Button color="secondary">Rechercher</Button>
        </Row>
      </div>
    );
  }
}
export default Home;
