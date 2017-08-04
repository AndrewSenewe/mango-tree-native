import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ListView,
  TextInput,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

class Tree extends Component {

  render () {
    const navigate = this.props.navigation.navigate;
    console.log(this.props);
    return (
      <View>
        <Text>
         Welcome to the world {this.props.treeStatus.treeName}
        </Text>
        <Image source={require('../assets/0.png')} />
        <Button
        onPress={(param) => {
          navigate('Gameover');
        }}
        title = "Emulate"
        />
        <Button
        onPress={() => {
          navigate('Gameover');
        }}
        title= "Harvest"
        disabled={true}
        />
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
