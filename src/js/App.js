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

    // TODO
    // Connect to server to get settings
    // and pass them to components

    getFromStorage()
    .then(links => {
      this.setState({links: links});
    })
    .catch(err => {
      console.warn('[App]: Cant get links from local');
    })
  }

  appendLink(link) {
    this.setState({links: [link, ...this.state.links]});
  }

  definePage(pageName) {
    switch (pageName) {
      case 'files':
        return <FilesPage links={this.state.links} changePage={this.changePage.bind(this)} />
      case 'main':
      default:
        return <MainPage links={this.state.links.slice(0, 3)} changePage={this.changePage.bind(this)} appendLink={this.appendLink.bind(this)} />
    }
  }

  changePage(pageName) {
    this.setState({pageName});
  }

  resetClicked() {
    resetStorage();
    this.setState({links: []});
  }

  render() {
    return (
      <div>
        <h2>MJS Cloud Storage</h2>
        <div className="clearfix"></div>

        {this.definePage(this.state.pageName)}

        <div className="clearfix"></div>
        <p className="bottom-text">
          &copy; 2019 <a className="just-color" href="https://morejust.store" target="blank">Morejust.store</a> | <span className="text-btn">Terms of use</span> | <span onClick={() => this.resetClicked()} className="text-btn">Reset storage</span>
        </p>
      </div>
    )
  }
}