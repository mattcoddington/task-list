import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class TaskList extends Component {

  removeTaskItem = (i) => {
    this.props.removeTaskItem(i);
    console.log('You clicked the remove button' + i);
  }

  render() {

    let listGroupItems;
    if (this.props.taskItems.length > 0) {
      listGroupItems = (
        this.props.taskItems.map((taskItem, i) => {
            return (
                <ListGroupItem key={i}>
                    <div className="task-item">
                    <div>{taskItem}</div>
                    <div><a onClick={() => this.removeTaskItem(i)} key={i}>Remove</a></div>
                    </div>
                </ListGroupItem>
            )
        })
      )
    }
    else {
      return (
        <ListGroupItem className="task-item-empty">
            <div className="task-item">
            <div>Add an item using the input above to start creating your Task List</div>
            </div>
        </ListGroupItem>
      )
    }

    return (

      <ListGroup>

        {listGroupItems}

      </ListGroup>

    );
  }
}

export default TaskList;
