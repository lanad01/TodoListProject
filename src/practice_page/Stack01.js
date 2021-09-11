import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import  Login  from './HomeScreen02'
import LoginSuccess from './LoginSuccess'

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
function StackScreen() {
  const navigation = useNavigation(); // 이거 쓸만하네
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#f08080'}
      }
      }>
        <Stack.Screen name="[ 홈 ] " component={Login} />
        <Stack.Screen name="[로그인확인]" component={LoginSuccess}/>
        {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
    );
  }
  export default function StackNavigate() {
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
  }