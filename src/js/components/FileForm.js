import React, { Component } from 'react';

export default class FileForm extends Component {
  render() {
    return (
      <div>
        <form id="file-upload-form" className="uploader">
          <input id="file-upload" type="file" name="somefiles" />

          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" src="#" alt="Preview" className="hidden" />
            <div id="start">
              <i className="fa fa-download" aria-hidden="true"></i>
              <div>Select a file or drag here</div>
              <div id="error" className="error"></div>
              <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
            </div>
          </label>
        </form>
        <div className="clearfix"></div>
      </div>
    );
  }
}