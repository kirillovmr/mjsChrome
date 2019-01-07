import React, { Component } from 'react';

export default class TermsPage extends Component {
  render() {
    return(
      <div>
        <p className="lead">Terms of Use</p>
        <div className="clearfix"></div>

        <div className="terms">
          <ol>
            <li><a href="https://morejust.store" target="blank">Morejust: Store</a> as well as its <a href="https://chrome.google.com/webstore/detail/mjs-free-unlimited-cloud/iojpjpjimioagnhafngdkionhagfiocg/" target="blank">Chrome extension</a> (later 'Service') is not a commercial but an open-source project instead, therefore it keeps all the files in different node storages and those files are publicly available.</li>
            <li>It is strictly prohibited to use this Service to upload and store any illegal or objectionable content such as but not limited to those that most users would find to be offensive, upsetting or inappropriate.</li>
            <li>In case you created your own storage and using this extension with your own API endpoint - you are solely responsible for protecting and maintaining your repositories as well as for any data lose.</li>
            <li>Do not use this Service if you do not agree to the Terms of Use described below. Your use of Morejust: Store means that you agree to these Terms of Use.</li>
          </ol>
          <ul >
            <li>If you find any malfunction in the Service - please report it to <a href="https://t.me/morejuststore" target="blank" className="text-btn">Telegram chat</a>.</li>
          </ul>
        </div>
        
      </div>
    );
  }
}