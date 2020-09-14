import React, { Component } from 'react';
import { SignIn, Slack } from '.';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/slack' component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
