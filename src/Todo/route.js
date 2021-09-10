import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen_v2 from "./loginScreen_v2";
import HomeScreen from "./Test"

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaView style={{flex :1}} >
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={LoginScreen_v2} options={{drawerLabel: 'HOME'}} />
                <Drawer.Screen name="About" component={HomeScreen} options={{drawerLabel: 'Test'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default DrawerNavigator;