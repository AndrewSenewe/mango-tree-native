import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ListView,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

class Tree extends Component {
  render () {
    console.log(this.props);
    return (
      <View>
        <Text>
         Welcome to the world {this.props.treeStatus.treeName}
        </Text>
        <Image source={require('../assets/0.png')} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    treeStatus: state.tree.treeInfo
  }
}
export default connect(mapStateToProps, null)(Tree)
