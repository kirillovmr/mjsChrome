import React, { Component } from 'react';

import copyText from '../misc/CopyText';

export default class CopyButton extends Component {
  constructor(props) {
    super(props);
    this.copyTimeout;
    this.state = {
      copied: false
    }
  }

  buttonClicked(e) {
    e.preventDefault();
    clearTimeout(this.copyTimeout);
    copyText(this.props.copy);
    this.setState({copied: true});
    this.copyTimeout = setTimeout(() => {
      this.setState({copied: false});
    }, 1000);
  }

  render() {
    return (
      <div style={{margin: 0}}>
        <div className="clearfix"></div>
        <button 
          className={`button ready ${this.state.copied ? 'copied' : ''}`}
          onClick={this.buttonClicked.bind(this)}
        >
        Copy link
        </button>
      </div>
    )
  }
}