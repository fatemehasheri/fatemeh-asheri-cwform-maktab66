import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import NameForm from './Form'
import Table from './Table'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: ["fatemeh"],
    };
  }

  handleAddContact = (contact) => {
    this.setState({ contactList: [...this.state.contactList, ...contact] });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <NameForm onAddContact={this.handleAddContact} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table contacts={this.state.contactList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
