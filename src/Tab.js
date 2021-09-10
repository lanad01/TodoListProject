import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './HomeScreen';
import Espa from './Espa'


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const karina = require('../assets/karina.jpg')
const winter = require('../assets/winter.jpg')
export default function TabNavi() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarIcon: () => {
            return <Image overflow='hidden' resize='contain' style={{flex : 0.7, width: 20}} source={require('../assets/karina.jpg')}/>
          }
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Espa" component={Espa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Bottom tab의 Screen에 들어갈 수 있는 옵션
// tabBarVisible   Screen에 표시되는 하단바를 없앨 수 있다. / 들어가는 값 : Boolean (기본값 true) : 
// tabBarLabel  하단바에 표시되는 이름을 바꿀 수 있다.  들어가는 값 : String (Screen의 이름)
// tabBarBadge tab에 알림이 온 것 처럼 뱃지가 표시된다. 알림 개수 표시 등 다양하게 사용할 수 있다. 들어가는 값 : String 또는 Number
// tabBarIcon
// 들어가는 값 : 함수
// 자세한 사용법은 아래에서 포함하겠다.