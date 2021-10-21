import React from 'react';
import {Text, View} from 'react-native';

export function DetailsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Details Screen
        </Text>
      </View>
    );
  }