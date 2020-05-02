import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteContact } from "../JS/actions/contactActions";
import { Card, Button } from "react-bootstrap";

class Annance extends Component {
  state = {
    annances: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/contact/annonce/${this.props.user._id}`)
      .then((response) => {
        this.setState({
          annances: response.data,
        });
      });
  }

  handleDelete = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    return (
      <div>
        {this.state.annances.map((annance, i) => (
          <div key={annance._id}>
            <Card bg="light" text="dark" style={{ width: "18rem" }}>
              <Card.Header>Contact N°:{i + 1}</Card.Header>
              <Card.Body>
                <Card.Title>{annance.name} </Card.Title>
                <Card.Text>
                  Telephone Number: {annance.telephone}
                  <br></br>
                  Email:{annance.email}
                  <br></br>
                  Date:{annance.date}
                </Card.Text>
              </Card.Body>
              <Button
                variant="danger"
                onClick={() => this.handleDelete(annance._id)}
              >
                Delete
              </Button>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.auth.user };
};
export default connect(mapStateToProps, { deleteContact })(Annance);
