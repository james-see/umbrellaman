import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  GameScreen: undefined;
  ScoreScreen: { score: number };
};

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GameScreen'>;

type Props = {
  navigation: GameScreenNavigationProp;
};

const GameScreen: React.FC<Props> = ({ navigation }) => {
  const [day, setDay] = useState(1);
  const [score, setScore] = useState(0);
  const [weather, setWeather] = useState(randomWeather());

  function randomWeather() {
    return Math.random() > 0.5 ? 'rain' : 'sun';
  }

  const nextDay = (tookUmbrella: boolean) => {
    if ((weather === 'rain' && tookUmbrella) || (weather === 'sun' && !tookUmbrella)) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setWeather(randomWeather());
    setDay(day + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>Day: {day}</Text>
      <Text style={styles.weatherText}>Weather: {weather}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Take Umbrella" onPress={() => nextDay(true)} />
        <Button title="No Umbrella" onPress={() => nextDay(false)} />
      </View>
      <Button title="View Score" onPress={() => navigation.navigate('ScoreScreen', { score })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 24,
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default GameScreen;

