import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {screenStyles} from '../../styles';

export function BookmarksScreen({navigation}) {
  return (
    <ScrollView>
      <View style={screenStyles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={(screenStyles.text)}>
          Bookmarks Screen: All bookmarks will be displayed here
        </Text>
      </View>
    </ScrollView>
  );
}
