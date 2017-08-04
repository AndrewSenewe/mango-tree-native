import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ListView,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import {addTree} from '../actions'

class Welcome extends Component {
  constructor () {
    super()
    this.state = {
      name : '',
      treeName: ''
    }
  }

  render () {
    const navigate = this.props.navigation.navigate;
    return (
      <View style={styles.viewParent}>
        <Text style={styles.welcomeText}>
          Welcome!
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          onChangeText={(text) => this.setState({name: text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Tree's Name"
          onChangeText={(text) => this.setState({treeName: text})}
        />
        <Button
        onPress={(param) => {
          this.props.startTree(this.state.treeName)
          navigate('Tree');
        }}
        title = "Start"
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

const mapDispatchToProps = (dispatch) => {
  return {
    startTree: (param) => dispatch(addTree(param))

  }
}
export default connect(null, mapDispatchToProps)(Welcome)
