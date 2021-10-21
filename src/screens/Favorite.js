import React from 'react';
import {Text, View} from 'react-native';
import {screenStyles} from '../../styles';

export function FavoriteScreen({navigation}) {
  return (
    <View style={screenStyles.container}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={screenStyles.text}>
        Favorite Screen: Please love us and stay in touch
      </Text>
    </View>
  );
}
