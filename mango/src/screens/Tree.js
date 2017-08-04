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
      <View style={styles.viewParent}>
        <Text style={styles.welcomeText}>
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
export default connect(mapStateToProps, null)(Tree)
