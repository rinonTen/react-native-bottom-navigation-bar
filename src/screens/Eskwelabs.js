import React from 'react';
import {Text, View} from 'react-native';
import {screenStyles} from '../../styles';

export function EskwelabsScreen({navigation}) {
  return (
    <View style={screenStyles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={screenStyles.text}>
        Eskwelabs Screen: We're amazing, thanks for joining us!!!
      </Text>
    </View>
  );
}
