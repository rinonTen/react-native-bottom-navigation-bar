import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import {Image, Text, View} from 'react-native';


function FavoriteScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Favorite Screen
      </Text>
    </View>
  );
}

function DetailsScreen({navigation}) {
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

function AnotherScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Another Screen
      </Text>
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Profile Screen
      </Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home Screen
      </Text>
    </View>
  );
}

const homeName = 'Home';
const favoriteName = 'Favorite';
const detailsName = 'details';
const settingsName = 'Settings';
const anotherName = 'Other';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const HomeIcon = () => {
    const starIcon = Platform.select({
      ios: require('./src/assets/icons/home.png'),
      android: require('./src/assets/icons/home.png'),
    });
    return <Image source={starIcon} resizeMode="contain" />
};


function MainContainer() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <HomeIcon />, 
          }}
          name={homeName}
          component={HomeScreen}
        />
        <Tab.Screen name={favoriteName} component={FavoriteScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={anotherName} component={AnotherScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MainContainer />;
}
