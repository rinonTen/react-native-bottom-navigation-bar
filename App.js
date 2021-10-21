import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  FavoriteScreenIcon,
  EskwelabsScreenIcon,
  BookmarksScreenIcon,
  ProfileScreenIcon,
} from './src/components/Icons';
import {HomeScreen} from './src/screens/Home';
import {FavoriteScreen} from './src/screens/Favorite';
import {EskwelabsScreen} from './src/screens/Eskwelabs';
import {BookmarksScreen} from './src/screens/Bookmarks';
import {ProfileScreen} from './src/screens/Profile';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBar: {paddingTop: 16, paddingBottom: 12},
});

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Home'}>
        <Tab.Screen
          options={{
            tabBarStyle: styles.tabBar,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <HomeIcon isActive={focused} />;
            },
          }}
          name={'Home'}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: styles.tabBar,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <FavoriteScreenIcon isActive={focused} />;
            },
          }}
          name={'Favorite'}
          component={FavoriteScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: styles.tabBar,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <EskwelabsScreenIcon isActive={focused} />;
            },
          }}
          name={'Eskwelabs'}
          component={EskwelabsScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: styles.tabBar,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <BookmarksScreenIcon isActive={focused} />;
            },
          }}
          name={'Bookmarks'}
          component={BookmarksScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: styles.tabBar,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <ProfileScreenIcon isActive={focused} />;
            },
          }}
          name={'Profile'}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default () => <MainContainer />;
