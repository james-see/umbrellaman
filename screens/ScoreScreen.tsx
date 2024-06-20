import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  GameScreen: undefined;
  ScoreScreen: { score: number };
};

type ScoreScreenRouteProp = RouteProp<RootStackParamList, 'ScoreScreen'>;

type ScoreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ScoreScreen'>;

type Props = {
  route: ScoreScreenRouteProp;
  navigation: ScoreScreenNavigationProp;
};

const ScoreScreen: React.FC<Props> = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
      <Button title="Back to Game" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ScoreScreen;

