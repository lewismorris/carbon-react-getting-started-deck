import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  addItem = e =>
    this.setState(prevState => {
      items: [...prevState.items, e.target.value];
    });

  removeItem = index =>
    this.setState(prevState => {
      items: prevState.items.splice(index, 1);
    });

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="todoItem">New Item</label>
          <input type="text" name="todoItem" id="todoItem" />
          <input type="submit" value="Add Todo" />
        </form>
        <ol>
          {items.map((item, key) => (
            <li>
              {item}
              <button onClick={() => this.removeItem(key)}>Complete</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Todo;
