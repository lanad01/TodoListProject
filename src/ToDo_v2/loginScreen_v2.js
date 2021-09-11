import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';

function LoginScreen_v2 ({navigation}) {
  const [token, setToken] = useState(false);
  const [userName, setUserName]=useState();
  
  AsyncStorage.getItem('Entryuser', (err, value) => {
    setUserName(JSON.parse(value));
    // alert("Login Screen : "+userName);
  })
  AsyncStorage.getItem('isAuthorized', (err, value) => {
    setToken(value);
    if(token==='true' ){
      alert('자동 로그인 됩니다! 어서오십쇼 '+userName+"님")
      navigation.navigate('Main', { userName : userName});
    }
  })
  
  function entryUser(){ // 등록 누르면 로그인정보 ASyn에 등록하면서 Main으로 이동
    AsyncStorage.setItem('isAuthorized', JSON.stringify(true));
    alert(userName)
    AsyncStorage.setItem('Entryuser', JSON.stringify(userName));
    navigation.navigate('Main')
  }
  const newName =e => {
    setUserName(e.nativeEvent.Text);
  }

  return (  
    <View style={styles.container}>
    <View style={styles.title}>
        <Text style={{color: 'white', fontSize:35, fontFamily: 'BMJUA'}}> To Do List Application</Text>

    </View>
        <View style={styles.content}>
          {/* flexDirection : 가로 세로의 설정 row or column */}
          {/* 기본 : padding은 자식element와의 패딩이며, margin은 부모element와의 margin*/}
            <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center', paddingBottom:10, marginTop:20}}>
                <Text style={{color: 'white', fontSize:27 , fontFamily: 'BMJUA', paddingLeft:20, marginBottom:20}}>처음 오셨네요! </Text>
                <Text style={{color: 'white', fontSize:27 , fontFamily: 'BMJUA', paddingLeft:20}}>이름을 등록해주세요. </Text>
            </View>
            <View>
                <TextInput onChangeText={ newName }
                style={{backgroundColor:'white', width:'90%', height:55, borderWidth: 5, borderRadius: 5, padding:5, marginLeft:18, marginTop:20}}/>
            </View>
            <View>
                <TouchableOpacity style={{width:'40%', height:43, marginTop:20, marginLeft: 105, borderColor: 'white', borderWidth: 5, borderRadius:10 }}
                onPress={entryUser}>
                <Text style={{fontSize: 25, fontFamily:'BMJUA', marginLeft: 40, marginTop: 5, color:'white'}}>등 록</Text>
                </TouchableOpacity>
            </View>
        </View>
         </View>
    );
  }

export default LoginScreen_v2; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#191970',
    fontFamily:'BMJUA',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    marginLeft:10
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});