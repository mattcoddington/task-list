import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (

      <header>

        <h1>Task List</h1>
        <p>This is just a simple task list. All it does is add some shit to a list.</p>

        {/*}{this.state.taskItems}*/}
        {/* This is just making sure state is set properly */}

        <hr />

      </header>

    );
  }
}

export default Header;
