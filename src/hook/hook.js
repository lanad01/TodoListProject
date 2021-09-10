import React, {useState, useEffect} from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const App = ()  => {
    const [count, addCount] = useState(0);
    const [onOff, setOnOff] = useState(false);

    const [textState, setTextState] = useState('not yet updated'); // 첫 상태

    useEffect(() => { // 첫 mount가 되고 나서의 관리
        setTextState('component did mount'); //콜백함수
    }, []);  // 의존성 목록 - 하나라도 충족된다면 콜백함수가 실행된다. 여기선 우선 조건이 없네

    const [textState2, setTextState2] = useState('not yet updated');

    useEffect(() => {
        return() => {
            Alert.alert('example', textState2);
        }
    },[])
    return(
        <View>
            <Text>Kepp Calm : {count}</Text>
            <Button title="AddCount" onPress={ () => addCount(count+1)}/>
                
            <Text>On off : {onOff ? "On" : "Off"}</Text>
            <Button title="OnOff" onPress={ () => setOnOff(!onOff)}/>
        
            <Text>Effect    :      {textState} </Text>
            <Button title="effect확인" onPress={() => setTextState('updated')}/>

            <Text>Effect 2  :  {textState2} </Text>
            <Button title="Effect 확인 2 " onPress={() => setTextState2('updated2')} /> 
        </View>
    )
}
export default App;