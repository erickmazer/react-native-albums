// Import libraries to help create a component

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

import Header from './src/components/Header';

// Create a component

const App = () => {
  return (
    <Header headerText='Texto chamado do App ao usar o componente Header' />
  );
};

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
