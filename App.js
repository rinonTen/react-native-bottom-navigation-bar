import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native' 


function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === detailsName) {
                iconName = focused ? 'list' : 'list-outline';
  
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={detailsName} component={DetailsScreen} />
          <Tab.Screen name={settingsName} component={SettingsScreen} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
   

export default function App() {
 return(
    <MainContainer/>
 )
}