import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import LoginScreen_v2 from './loginScreen_v2'
import MainScreen from './mainScreen_v2';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default Route = () => {   
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth'>
                <Stack.Screen name="Auth"component={LoginScreen_v2}/>
                <Stack.Screen name="Main" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} 