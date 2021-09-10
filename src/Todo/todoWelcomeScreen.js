import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import LoginScreen from './loginScreen';
import LoginScreen_v2 from './loginScreen_v2'
import AssignScreen from './assignScreen';
import MainScreen from './mainScreen';
import ModalTester from './Test';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default TabRoute = () => {
    return(
        <NavigationContainer>
            <TabNav.Navigator>
                <TabNav.Screen name="Feed"component={ModalTester}/>
                <TabNav.Screen name="Message" component={ModalTester} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
} 
Route = () => {
    const [ token, setToken] = useState();

    return (
        <SafeAreaView style={{flex : 1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' 
            screenOptions={{headerShown:true, headerTitle: 'To Do.', headerTitleStyle:{color:'white'}, headerStyle:{backgroundColor:'#191970'}}} >
                <Stack.Screen name="MainScreen" component={TabRoute}/>
                <Stack.Screen name="Login" component={LoginScreen_v2}/>
                <Stack.Screen name="Assign" component={AssignScreen}/>
                <Stack.Screen name="Main" component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
};
