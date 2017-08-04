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
      <View style={styles.viewParent}>
        <Text style={styles.welcomeText}>
         {this.props.treeStatus.treeName} has made to its last day!
        </Text>
        <Image source={require('../assets/4.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewParent: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#5b8940'
  },
  textInput: {
    backgroundColor: '#ecf2de',
    height: 40
  },
  welcomeText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
})

const mapStateToProps = (state) => {
  return {
    treeStatus: state.tree.treeInfo
  }
}
export default connect(mapStateToProps, null)(Gameover)
