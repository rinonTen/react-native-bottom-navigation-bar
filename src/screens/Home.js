import React from 'react';
import {Text, View} from 'react-native';
import {screenStyles} from '../../styles';

export function HomeScreen() {
  return (
    <View style={screenStyles.container}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={screenStyles.text}>
        Home Screen: Welcome to DLS
      </Text>
    </View>
  );
}
