import React from 'react';
import {Text, View} from 'react-native';

export function EskewlabsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Eskewlabs Screen: We're amazing, thanks for joining us!!!
        </Text>
      </View>
    );
  }