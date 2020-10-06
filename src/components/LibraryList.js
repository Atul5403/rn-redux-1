import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }
  render() {
    return (
      <FlatList
        style={{marginTop: 20}}
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.title}
      />
    );
  }
}

const mapStateToProp = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProp)(LibraryList);
