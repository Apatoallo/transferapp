import { StatusBar } from 'expo-status-bar';
import React from 'react';

import firestore from '@react-native-firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import { StyleSheet, Text, View, Image } from 'react-native';
import LiveSales from './app/components/LiveSales';
import MainScreen from './app/components/MainScreen';

import Orders from './app/components/Orders';

import Wishes from './app/components/Wishes';
import Messages from './app/components/Messages';


import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import glamplight from './app/assets/icons/genie-lamp-48-nocolor.png'
import glampfocused from './app/assets/icons/genie-lamp-48.png'


import dashboard from './app/assets/icons/tabIcons/dashboard.png'
import dashboardShine from './app/assets/icons/tabIcons/dashboardShine.png'

import magicLamp from './app/assets/icons/tabIcons/magiclamp.png'
import magicLampShine from './app/assets/icons/tabIcons/magiclamp36B.png'

import plane from './app/assets/icons/tabIcons/planefilled.png'
import planeShine from './app/assets/icons/tabIcons/planefilledshine.png'


import basket from './app/assets/icons/tabIcons/basket.png'
import basketShine from './app/assets/icons/tabIcons/basketShine.png'

import chat from './app/assets/icons/tabIcons/chatbubbles.png'
import chatShine from './app/assets/icons/tabIcons/chatbubbleshine.png'


import airplanedark from './app/assets/icons/tabsairplanedark48.png'


import Ionicons from 'react-native-vector-icons/Ionicons';

function Travels() {
  return (
    <Wishes/>
  );
}

function Message() {
  return (
    <Messages/>
  );
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

      {/* <Stack.Navigator>
        
        <Stack.Screen name="LiveSaless" component={LiveSales} />
      </Stack.Navigator> */}

      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Travels') {
              iconName = focused
                ? planeShine
                : plane;
            } else if (route.name === 'Messages') {
              iconName = focused ? chatShine : chat;
            }  else if (route.name === 'Main') {
              iconName = focused ? dashboardShine : dashboard;
            } else if (route.name === 'Orders') {
              iconName = focused ? basketShine : basket;
            } else if (route.name === 'Lamp') {
              iconName = focused ? magicLampShine : magicLamp;
            }
            
            // You can return any component that you like here!
            return <View style={route.name === 'Lamp' &&styles.tabIcons }><Image source={iconName}/></View>;
          },
        })}
        tabBarOptions={{
          
          showLabel: false,
        }}
      >
        {/* <Tab.Screen name="Main" component={LiveSales} /> */}
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Lamp" component={Travels} />
        <Tab.Screen name="Travels" component={Travels} />
        <Tab.Screen name="Messages" component={Message} />
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
