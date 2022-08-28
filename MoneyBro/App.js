import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Image,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

//Screens
import Home from './src/navigation/screens/Home';
import Login from './src/navigation/screens/login';
import Expense from './src/navigation/screens/Expense';
import Income from './src/navigation/screens/Income';
import Settings from './src/navigation/screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  function HomeTabs() {
    return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerStyle: {backgroundColor: '#242424'}, headerTitleStyle: { color: 'white' } }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./src/assets/img/home.png')
                  : require('./src/assets/img/home.png')
              }
              style={{
                width: size,
                height: size,
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#242424',
          },
          tabBarActiveBackgroundColor: '#333333'
        }} />
        <Tab.Screen name="Income" component={Income} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./src/assets/img/income.png')
                  : require('./src/assets/img/income.png')
              }
              style={{
                width: size,
                height: size,
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#242424',
          },
          tabBarActiveBackgroundColor: '#333333'
        }} />
        <Tab.Screen name="Expense" component={Expense} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./src/assets/img/expense.png')
                  : require('./src/assets/img/expense.png')
              }
              style={{
                width: size,
                height: size,
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#242424',
          },
          tabBarActiveBackgroundColor: '#333333'
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('./src/assets/img/settings.png')
                  : require('./src/assets/img/settings.png')
              }
              style={{
                width: size,
                height: size,
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#242424',
          },
          tabBarActiveBackgroundColor: '#333333'
        }} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ header: () => null }}>
          <Stack.Screen name="loginScreen" component={Login} />
          <Stack.Screen name="homeScreen" component={HomeTabs} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
});

export default App;
