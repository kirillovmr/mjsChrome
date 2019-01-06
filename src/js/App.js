import React, { Component } from 'react';

import MainPage from './pages/MainPage';
import FilesPage from './pages/FilesPage';
import TermsPage from './pages/TermsPage';

import { getFromStorage, resetStorage } from './misc/Chrome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'main',
      prevPages: [],
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
      case 'terms':
        return <TermsPage changePage={this.changePage.bind(this)} />
      case 'files':
        return <FilesPage links={this.state.links} changePage={this.changePage.bind(this)} />
      case 'main':
      default:
        return <MainPage links={this.state.links} changePage={this.changePage.bind(this)} appendLink={this.appendLink.bind(this)} />
    }
  }

  changePage(pageName) {
    this.setState({
      pageName,
      prevPages: [...this.state.prevPages, this.state.pageName]
    });
  }

  goPageBack() {
    const newPage = Array(...this.state.prevPages).pop();
    this.setState({
      pageName: newPage,
      prevPages: this.state.prevPages.slice(0, this.state.prevPages.length - 1)
    })
  }

  resetClicked() {
    resetStorage();
    this.setState({links: []});
  }

  renderFooter() {
    return (
      <p className="bottom-text">
        &copy; 2019 <a className="just-color" href="https://morejust.store" target="blank">Morejust.store</a> | <span className="text-btn" onClick={() => this.changePage('terms')}>Terms of use</span> | <span onClick={() => this.resetClicked()} className="text-btn">Reset storage</span>
      </p>
    );
  }

  render() {
    console.log('Render app', this.state.prevPages);
    return (
      <div>
        <h2>
          <i onClick={this.state.prevPages.length > 0 ? () => this.goPageBack() : null} className={`fa fa-chevron-left icon-back ${this.state.prevPages.length === 0 ? 'invis':''}`}></i>
          MJS Cloud Storage
        </h2>
        <div className="clearfix"></div>

        {this.definePage(this.state.pageName)}

        <div className="clearfix"></div>
        {this.renderFooter()}
      </div>
    )
  }
}