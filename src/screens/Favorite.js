import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { styles as screenStyles} from '../../styles';

export function FavoriteScreen({navigation}) {
  return (
    <ScrollView>
      <View style={screenStyles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={screenStyles.text}>
          Favorite Screen: Please love us and stay in touch
        </Text>
      </View>
    </ScrollView>
  );
}
