import React from 'react';
import {Text, View} from 'react-native';
import {screenStyles} from '../../styles';

export function ProfileScreen({navigation}) {
  return (
    <View style={screenStyles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={screenStyles.text}>
        Profile screen: This is the most inspiring profile that I have ever seen
      </Text>
    </View>
  );
}
