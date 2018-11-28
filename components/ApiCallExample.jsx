import React, { Fragment, Component } from "react";

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
        {this.state.loading ? (
          <Fragment>
            <img src={this.state.data.avatar_url} />
            <h1>{this.state.data.name}</h1>
          </Fragment>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}

export default GithubProfile;
