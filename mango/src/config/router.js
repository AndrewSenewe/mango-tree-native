import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Welcome  from '../screens/Welcome'
import Tree  from '../screens/Tree'

export default AppNavigator = StackNavigator({
  Welcome: {screen: Welcome},
  Tree: {screen: Tree}
},{
  headerMode: 'none'
})
