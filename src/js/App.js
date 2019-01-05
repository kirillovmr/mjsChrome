import React, { Component } from 'react';

import MainPage from './pages/MainPage';
import FilesPage from './pages/FilesPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'main',
      links: []
    }
  }

  definePage(pageName) {
    switch (pageName) {
      case 'files':
        return <FilesPage changePage={this.changePage.bind(this)}/>
      case 'main':
      default:
        return <MainPage changePage={this.changePage.bind(this)}/>
    }
  }

  changePage(pageName) {
    this.setState({pageName});
  }

  resetLinks() {
    if (confirm('This will delete all your stored links. Are you sure?')) {
      chrome.storage.sync.set({links: []}, function() {
        // removeLinksFormDom();
        // log('All links were deleted');
      });
    }
  }

  render() {
    return (
      <div>
        <h2>MJS Cloud Storage</h2>
        <div className="clearfix"></div>

        {this.definePage(this.state.pageName)}

        <div className="clearfix"></div>
        <p className="bottom-text">&copy; 2019 Morejust.store | <span onClick={() => this.resetLinks()} className="text-btn">Reset</span></p>
      </div>
    )
  }
}