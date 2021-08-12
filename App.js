import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Playlist from './components/Playlist';
import AboutMe from './components/AboutMe';
import Intro from './components/Intro';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';




export default function App() {
  const Stack = createStackNavigator();
  

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Playlist" component={Playlist} />
          <Stack.Screen name="AboutMe" component={AboutMe} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
