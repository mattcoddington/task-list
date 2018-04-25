import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList.js';
import Header from './components/Header.js';
import AddInput from './components/AddInput.js';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      taskItems: []
    }

  }

  addTaskItem = (taskItem) => {
    this.state.taskItems.push(taskItem);
    this.setState({taskItems: this.state.taskItems});
  }

  removeTaskItem = (i) => {

    this.setState(prevState => {
      let taskItemsNew = prevState.taskItems.slice()
      taskItemsNew.splice(i, 1)
      return {taskItems: taskItemsNew}
    })

    console.log('You have removed an item');
  };

  render() {
    return (

      <div id="container">

        <Header />

        <AddInput addTaskItem={this.addTaskItem} taskItems={this.state.taskItems} handleClick={this.handleClick}/>

        <TaskList taskItems={this.state.taskItems} removeTaskItem={this.removeTaskItem}/>

      </div>
    )
  }
}

export default App;
