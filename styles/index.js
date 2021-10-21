import {StyleSheet} from 'react-native';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  text: {fontSize: 26, fontWeight: 'bold'},
});

export const toolBarStyles = StyleSheet.create({
  tabBar: {paddingTop: 14, paddingBottom: 4},
});
