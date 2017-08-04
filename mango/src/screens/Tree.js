import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

class Tree extends Component {
  render () {
    return (
      <View>
        <Text>
         Tree
        </Text>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   cards: state.todo.todos
// }
// export default connect(mapStateToProps, null)(Tree)
export default Tree
