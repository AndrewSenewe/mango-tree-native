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

class Gameover extends Component {
  cons
  render () {
    console.log(this.props);
    return (
      <View>
        <Text>
         {this.props.treeStatus.treeName} has made to its last day!
        </Text>
        <Image source={require('../assets/4.png')} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    treeStatus: state.tree.treeInfo
  }
}
export default connect(mapStateToProps, null)(Gameover)
