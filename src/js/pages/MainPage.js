import React, { Component } from 'react';

import FileForm from '../components/FileForm';
import Links from '../components/Links';

export default class MainPage extends Component {
  render() {
    return(
      <div>
        <FileForm />
        <Links
          leftText={'Recent links:'}
          rightText={'View all links'}
          rightTextClick={() => this.props.changePage('files')}
        />
      </div>
    );
  }
}