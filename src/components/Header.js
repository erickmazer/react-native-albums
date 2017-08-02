// Import libraries for making a component

import React from 'react';
import { View, Text, Component } from 'react-native';

// Make a component

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Styles

const styles = {
  viewStyle: {
    height: 120,
    paddingTop: 24,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  }
};

// Make the component available to other parts of the app

export default Header;
