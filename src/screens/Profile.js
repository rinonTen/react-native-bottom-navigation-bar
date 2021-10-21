import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { styles as screenStyles} from '../../styles';

export function ProfileScreen({navigation}) {
  return (
    <ScrollView>
      <View style={screenStyles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={screenStyles.text}>
          Profile screen: This is the most inspiring profile that I have ever
          seen
        </Text>
      </View>
    </ScrollView>
  );
}
