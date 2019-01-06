import React, { Component } from 'react';
import uuid from 'uuid/v1';

import Link from './Link';

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.rightTextFunc = this.props.rightTextClick ? this.props.rightTextClick : ()=>console.log('RightBtnClicked');
  }

  renderLinks() {
    let links = this.props.links || [];
    links = this.props.maxLinks ? links.slice(0, this.props.maxLinks) : links;

    if (links.length === 0) {
      return <Link />
    }

    return links.map(link => {
      return <Link link={link} key={uuid()} />
    });
  }

  render() {
    return (
      <div>
        <div id="recent-links-heading" className="">
          <p className="text-title-sm">{this.props.leftText || ''}</p>
          <p onClick={() => this.rightTextFunc() || null} className="text-title-sm text-btn right">{this.props.rightText || ''}</p>
        </div>

        <div id="links" className="links">
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}