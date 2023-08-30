import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStartedScreen from './screens/getStarted';
import AllPlantsScreen from './screens/allPlants';

const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="getStarted"
        component={GetStartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="allPlants" 
        component={AllPlantsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
