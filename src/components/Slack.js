import React, { Component } from 'react';
import { Sidebar, MainComponent } from '.';

export default class Slack extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainComponent />
      </div>
    );
  }
}
