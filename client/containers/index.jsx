import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../state';


const mapStateToProps = state => ({
  user: selectors.selectUser(state),
});

const App = ({ user }) => (
  <div className="app">
    <h3>
Your user name is :
      {user.name}
    </h3>
  </div>
);

export default connect(mapStateToProps)(App);
