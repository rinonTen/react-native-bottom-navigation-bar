import React from 'react';
import {Text, View} from 'react-native';

export function ProfileScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Profile screen: This is the most inspiring profile that I have ever seen
        </Text>
      </View>
    );
  }