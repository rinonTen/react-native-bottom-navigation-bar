import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import {HomeIcon, FavoriteScreenIcon, DetailsScreenIcon, MenuScreenIcon, ProfileScreenIcon} from './src/components/Icons'
import { HomeScreen } from './src/screens/Home'; 
import { FavoriteScreen } from './src/screens/Favorite';
import { DetailsScreen } from './src/screens/Details';
import { IconsScreen } from './src/screens/Icons';
import { ProfileScreen } from './src/screens/Profile';
 

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"Home"}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <HomeIcon isActive={focused} />;
            },
          }}
          name={"Home"}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <FavoriteScreenIcon isActive={focused} />;
            },
          }}
          name={"Favorite"}
          component={FavoriteScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <DetailsScreenIcon isActive={focused} />;
            },
          }}
          name={"Details"}
          component={DetailsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <MenuScreenIcon isActive={focused} />;
            },
          }}
          name={"Icons"}
          component={IconsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return <ProfileScreenIcon isActive={focused} />;
            },
          }}
          name={"Profile"}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MainContainer />;
}
