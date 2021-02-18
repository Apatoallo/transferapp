import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Wishes from './app/components/Wishes';
import Orders from './app/components/Orders';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import glamplight from './app/assets/icons/genie-lamp-48-nocolor.png'
import glampfocused from './app/assets/icons/genie-lamp-48.png'


import dashboard from './app/assets/icons/tabIcons/dashboard.png'
import dashboardShine from './app/assets/icons/tabIcons/dashboardShine.png'

import magicLamp from './app/assets/icons/tabIcons/magiclamp.png'
import magicLampShine from './app/assets/icons/tabIcons/magiclamp36B.png'


import planelight from './app/assets/icons/tabIcons/plane.png'
import plane from './app/assets/icons/tabIcons/planefilled.png'
import planeShine from './app/assets/icons/tabIcons/planefilledshine.png'


import basket from './app/assets/icons/tabIcons/basket.png'
import basketShine from './app/assets/icons/tabIcons/basketShine.png'

import chatlight from './app/assets/icons/tabIcons/chat.png'
import chat from './app/assets/icons/tabIcons/chatbubbles.png'
import chatShine from './app/assets/icons/tabIcons/chatbubbleshine.png'


import airplanedark from './app/assets/icons/tabsairplanedark48.png'


import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <Wishes/>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? planeShine
                : plane;
            } else if (route.name === 'Settings') {
              iconName = focused ? chatShine : chat;
            }  else if (route.name === 'H') {
              iconName = focused ? dashboardShine : dashboard;
            } else if (route.name === 'Ho') {
              iconName = focused ? basketShine : basket;
            } else if (route.name === 'Hom') {
              iconName = focused ? magicLampShine : magicLamp;
            }
            
            // You can return any component that you like here!
            return <View style={route.name === 'Hom' &&styles.tabIcons }><Image source={iconName}/></View>;
          },
        })}
        tabBarOptions={{
          
          showLabel: false,
        }}
      >
        <Tab.Screen name="H" component={HomeScreen} />
        <Tab.Screen name="Ho" component={Orders} />
        <Tab.Screen name="Hom" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcons: {
    marginTop: -40,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(217,217,217,0.5)',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    
  },
  chatIcon: {
    width: 20,
  }
});
