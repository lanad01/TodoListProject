import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import LoginScreen_v2 from './loginScreen_v2'
import AssignScreen from './assignScreen';
import MainScreen from './mainScreen';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();


export default TabRoute = () => {
    return(
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name="Task"component={LoginScreen_v2}/>
                <TabNav.Screen name="Main" component={MainScreen} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
};
