import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className='user-profile'>
          <div>
            <img />
          </div>
          <div>Ronald</div>
        </div>
        <div className='user-channel'></div>
      </div>
    );
  }
}
