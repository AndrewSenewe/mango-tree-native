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
        <Text>
          asdg
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
        onPress={() => {navigate('Tree')}}
        title = "Tree"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewParent: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#689302'
  },
  textInput: {
    backgroundColor: '#ecf2de',
    height: 40
  },
  authorText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
  },
})

export default Welcome
