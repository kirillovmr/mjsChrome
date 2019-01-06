import React, { Component } from 'react';

import Links from '../components/Links';

export default class FilesPage extends Component {
  render() {
    return(
      <div>
        {/* <p className="lead">No Plugins <b>Just Javascript</b></p> */}
        <div className="clearfix"></div>
        <Links
          leftText={'Your links:'}
          rightText={'Back to main page'}
          rightTextClick={() => this.props.changePage('main')}
          links={this.props.links}
        />
      </div>
    );
  }
}