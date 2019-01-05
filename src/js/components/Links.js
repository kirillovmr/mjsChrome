import React, { Component } from 'react';

import Link from './Link';

export default class Links extends Component {

  renderLinks(amount = 100) {
    const links = this.props.links || [];

    if (links.length === 0) {
      return <Link />
    }

    return links.map(link => {
      return <Link link={link} />
    });
  }

  render() {
    return (
      <div>
        <div id="recent-links-heading" className="">
          <p className="text-title-sm">{this.props.leftText || 'leftText'}</p>
          <p onClick={() => this.props.rightTextClick()} className="text-title-sm text-btn right">{this.props.rightText || 'rightText'}</p>
        </div>

        <div id="links" className="links">
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}