import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {

  render() {
    console.log(this.props);

    return ;
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

// use connect to connect React and Redux
export default connect(mapStateToProps)(LibraryList);