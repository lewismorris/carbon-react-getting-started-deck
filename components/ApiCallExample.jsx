import React, { Component } from "react";

class GithubProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/clicksco");

    const json = await response.json();

    this.setState({
      loading: false,
      data: json
    });
  }

  render() {
    return (
      <div>
        {!this.state.loading ? (
          <>
            <img src={this.state.data.avatar_url} alt={this.state.data.name} />
            <h1>{this.state.data.name}</h1>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default GithubProfile;
