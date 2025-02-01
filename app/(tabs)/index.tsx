import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import WorkoutScreen from '../../screens/WorkoutScreen';
import CardioScreen from '../../screens/CardioScreen';
import YogaScreen from '../../screens/YogaScreen';
import DietScreen from '../../screens/DietScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';
import FitnessProfileScreen from '../../screens/FitnessProfileScreen';
import SubscriptionScreen from '../../screens/SubscriptionScreen';
import HelpScreen from '../../screens/HelpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Cardio" component={CardioScreen} />
        <Stack.Screen name="Yoga" component={YogaScreen} />
        <Stack.Screen name="Diet" component={DietScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="FitnessProfile" component={FitnessProfileScreen} />
        <Stack.Screen name="Subscriptions" component={SubscriptionScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;