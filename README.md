# React-Search-debouncing

Here I'm going to implement debouncing functionality in React, which is really helpful in search functionality.

```js
import React from "react";

class App extends React.Component {
  state = {
    search: ""
  };

  handleChange = (event) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        search: event.target.value
      });
    }, 500);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    );
  }
}

export default App;

```
