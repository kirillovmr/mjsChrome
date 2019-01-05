import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    if (this.props.link)
      return (
        <div class="link">
          <div class="link-text">Short link name</div>
          <p class="ext">ext</p> 
        </div>
      );
    else 
      return (
        <div className="link">
          <div className="link-text">🚀 Upload your first file and enjoy! 😎</div>
        </div>
      );
  }
}