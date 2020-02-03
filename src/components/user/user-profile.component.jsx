import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className='container'>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    );
  }
}

export default UserProfile;
