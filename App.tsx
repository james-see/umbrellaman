import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';
import ScoreScreen from './screens/ScoreScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameScreen">
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
