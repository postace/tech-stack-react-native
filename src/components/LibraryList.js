import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow() {
    
  }

  render() {
    return (
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      ></ListView>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// use connect to connect React and Redux
export default connect(mapStateToProps)(LibraryList);