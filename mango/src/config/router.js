import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome  from '../screens/Welcome'
import Tree  from '../screens/Tree'
import Gameover  from '../screens/Gamover'

export default AppNavigator = StackNavigator({
  Welcome: {screen: Welcome},
  Gameover: {screen: Gameover},
  Tree: {screen: Tree}
},{
  headerMode: 'none'
})
