import React, { Component } from 'react';
import {Button, FormGroup, InputGroup, FormControl, Form} from 'react-bootstrap';

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  onSubmit = (e) => {
    console.log('You successfully added item: ' + this.state.value);
    this.props.addTaskItem(this.state.value);
    e.preventDefault();
  }

  render() {

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup className="add-input">
          <InputGroup>
            <FormControl type="text" value={this.state.value} onChange={this.handleChange}/>
          </InputGroup>
          <Button className="add-button" bsStyle="primary" onClick={this.onSubmit}>Add Item</Button>
        </FormGroup>
      </Form>

    );
  }
}

export default AddInput;
