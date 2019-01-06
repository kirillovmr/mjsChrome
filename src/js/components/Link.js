import React, { Component } from 'react';

import copyText from '../misc/CopyText';

export default class Link extends Component {
  getFilename(link) {
    const split = link.split('/');
    return split.pop();
  }

  getExtension(link) {
    const split = link.split('.');
    return split.pop();
  }

  render() {
    if (this.props.link) {
      const filename = this.getFilename(this.props.link);
      const ext = this.getExtension(this.props.link);
      return (
        <div className="link" onClick={() => {copyText(this.props.link)}}>
          <div className="link-text">{filename}</div>
          <p className={`ext e-${ext}`}>{ext}</p> 
        </div>
      );
    } else {
      return (
        <div className="link">
          <div className="link-text"><span className="emoji">🚀</span> Upload your first file and enjoy! <span className="emoji">😎</span></div>
        </div>
      );
    }
  }
}