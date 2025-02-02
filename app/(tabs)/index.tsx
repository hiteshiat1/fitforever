// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CardioScreen from "../../screens/CardioScreen";
import DietScreen from "../../screens/DietScreen";
import FitnessProfileScreen from "../../screens/FitnessProfileScreen";
import HelpScreen from "../../screens/HelpScreen";
import HomeScreen from "../../screens/HomeScreen";
import SubscriptionScreen from "../../screens/SubscriptionScreen";
import UserProfileScreen from "../../screens/UserProfileScreen";
import WorkoutScreen from "../../screens/WorkoutScreen";
import YogaScreen from "../../screens/YogaScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Yoga" component={YogaScreen} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
      <Stack.Screen name="Cardio" component={CardioScreen} />
      <Stack.Screen name="Diet" component={DietScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="FitnessProfile" component={FitnessProfileScreen} />
      <Stack.Screen name="Subscriptions" component={SubscriptionScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
};
// looks like navigation is already provided by expo router where tabLayout is used inside _layout.tsx, removed navigation here as it's arlready being provided higher up in the tree
// <NavigationContainer>
// </NavigationContainer>

export default App;
