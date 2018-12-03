import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      input: ""
    };
  }

  handleChange = e =>
    this.setState({
      input: e.target.value
    });

  addItem = e => {
    e.preventDefault();

    this.setState(prevState => ({
      items: [...prevState.items, prevState.input],
      input: ""
    }));
  };

  removeItem = index => {
    console.log("removeItem");

    this.setState(prevState => ({
      items: prevState.items.filter((item, key) => index !== key)
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="todoItem">New Item</label>
          <input
            type="text"
            name="todoItem"
            id="todoItem"
            onChange={this.handleChange}
            required
            value={this.state.input}
          />
          <input type="submit" value="Add Todo" />
        </form>
        <ol>
          {this.state.items.map((item, key) => (
            <li key={key}>
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
