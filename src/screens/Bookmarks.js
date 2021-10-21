import React from 'react';
import {Text, View} from 'react-native';

export function BookmarksScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Bookmarks Screen: All bookmarks will be displayed here
        </Text>
      </View>
    );
  }