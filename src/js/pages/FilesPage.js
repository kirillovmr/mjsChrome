import React, { Component } from 'react';

import Links from '../components/Links';

export default class FilesPage extends Component {
  render() {
    return(
      <div>
        <p class="lead">No Plugins <b>Just Javascript</b></p>
        <Links
          leftText={'Your links:'}
          rightText={'Back to main page'}
          rightTextClick={() => this.props.changePage('main')}
        />
      </div>
    );
  }
}