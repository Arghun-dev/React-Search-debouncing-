import React from "react";

class MyClassComponent extends React.Component {
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

export default MyClassComponent;
