import React, { Component } from 'react';

import imageForExt from '../misc/ImageForExtension';
import CopyButton from './CopyButton';

import { saveToStorage } from '../misc/Chrome';

export default class FileForm extends Component {
  constructor(props) {
    super(props);
    this.maxFileSizeMB = 100;
    this.loadingInterval = null;
    this.state = {
      error: false,
      errorMsg: '',
      outputMsg: '',
      uploading: false,
      thumbnail: '',
      loading: 0,
      result: '',
      copied: true, // To display 'Copied' in btn
    }
  }

  fileSelectHandler(e) {
    // Turning back all UI changes
    this.setState({uploading: false, loading: 0, error: false, errorMsg: ''});

    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    // fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      const error = this.parseFile(f);
      if(!error) {
        this.uploadFile(f);
      } else {
        this.error(error.msg);
        this.refs.form.reset();
      }
    }
  }

  parseFile(file) {
    if(file.size / 1000000 >= this.maxFileSizeMB) {
      return {
        msg: `Please upload file less than ${this.maxFileSizeMB} mb`
      };
    }
    
    var imageName = file.name;
    const extension = file.name.split('.').pop();

    // Shortening filename
    let fileName = imageName;
    if (imageName.length > 15) {
      fileName = imageName.split('.')[0];
      fileName = fileName.substring(0, 10) + '... .' + extension;
    }
    this.setState({uploading: true, outputMsg: `Uploading ${fileName}`});
    
    var isImage = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);

    this.setState({ // Setting thumbnail
      thumbnail: isImage ? URL.createObjectURL(file) : imageForExt(extension)
    });
  }

  uploadFile(file) {

    // Imitate load progress
    this.loadingInterval = setInterval(() => {
      let valueToAdd;
      if(this.state.loading < 70)
        valueToAdd = Math.random() * 2;
      else
        if (this.state.loading < 90)
          valueToAdd = Math.random() / 5;

      this.setState({loading: this.state.loading += valueToAdd});
    }, 100);

    var formData = new FormData(document.getElementById('file-upload-form')),
        // API_ROOT = "https://morejust.herokuapp.com",
        API_ROOT = "http://localhost:4000",
        myHeaders = new Headers({
          "Access-Control-Allow-Origin": "*",
        });

    fetch(`${API_ROOT}/upload`, {
      method: 'POST',
      headers: myHeaders,
      body: formData
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('GOT:', data);
      const link = data[0];

      clearInterval(this.loadingInterval);
      this.setState({
        loading: 100,
        outputMsg: this.urlName(link),
        result: link
      });

      saveToStorage(link);
      this.props.appendLink(link);
    })
    .catch(err => {
      console.error('Error on upload:', err);
      clearInterval(this.loadingInterval);
      this.setState({
        uploading: false,
        error: true,
        errorMsg: 'Connection error. Failed to upload',
      });

    });
  }

  error(msg) {
    this.setState({error: true, errorMsg: msg});
  }
  urlName(link) {
    const split = link.split('/');
    const name = split.pop();
    return `${name}`;
  }

  renderCopyBtn() {
    return <CopyButton copy={this.state.result}/>
  }

  render() {
    return (
      <div>
        <span className="small-text">Loading will be interrupted if you close this window</span>
        <form ref="form" id="file-upload-form" className="uploader">
          <input id="file-upload" onChange={this.fileSelectHandler.bind(this)} type="file" name="somefiles" />

          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" src={this.state.thumbnail} alt="Preview" className={this.state.uploading ? "" : "hidden"} />
            <div id="start" className={this.state.uploading ? "hidden" : ""}>
              <i className="fa fa-download" aria-hidden="true"></i>
              <div>Select a file or drag here</div>
              <div className="error">{this.state.errorMsg}</div>
              <span className="btn btn-primary">Select a file</span>
            </div>
            <div className={this.state.uploading ? "" : "hidden"}>
              <div><strong>{this.state.outputMsg}</strong></div>
              <progress className={`progress ${this.state.loading === 100 ? "progress-done" : ""} ${this.state.error ? "progress-error" : ""}`} value={this.state.loading} max="100">
                <span>0</span>%
              </progress>
              {this.state.loading === 100 ? this.renderCopyBtn() : null}
            </div>
          </label>
        </form>
        <div className="clearfix"></div>
      </div>
    );
  }
}