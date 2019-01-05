import React, { Component } from 'react';

import MainPage from './pages/MainPage';
import FilesPage from './pages/FilesPage';

import { getFromStorage, resetStorage } from './misc/Chrome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'main',
      links: []
    }
  }

  componentDidMount() {
    getFromStorage()
    .then(links => {
      this.setState({links: links});
    })
    .catch(err => {
      console.warn('[App]: Cant get links from local');
    })
  }

  definePage(pageName) {
    switch (pageName) {
      case 'files':
        return <FilesPage links={this.state.links} changePage={this.changePage.bind(this)}/>
      case 'main':
      default:
        return <MainPage links={this.state.links} changePage={this.changePage.bind(this)}/>
    }
  }

  changePage(pageName) {
    this.setState({pageName});
  }

  render() {
    return (
      <div>
        <h2>MJS Cloud Storage</h2>
        <div className="clearfix"></div>

        {this.definePage(this.state.pageName)}

        <div className="clearfix"></div>
        <p className="bottom-text">&copy; 2019 Morejust.store | <span onClick={() => resetStorage()} className="text-btn">Reset</span></p>
      </div>
    )
  }
}