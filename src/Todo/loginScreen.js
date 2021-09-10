import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen ({navigation}) {

    const [userId, setUserId] = useState('');
    const [token, setToken ] = useState('notLoginned');
    const [userPwd, setUserPwd] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);  
    
// Session 문제 
// 리덕스에 저장해놓으면 메모레이 저장되므로 앱이 다시시작될 때 데이터가 날라간다.
    
    function loginConfirm(){
      // Login Success Branch
      if(true){
        setToken('isLoginned');
        AsyncStorage.setItem('Entryuser', JSON.stringify(userId));

        navigation.navigate('Main', {
          presentUser : userId,
          token : token
        })
      }
    }
    function toggleModal(){
      setModalVisible(!isModalVisible);
    }
    return (
        
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{color: 'white', fontSize:35, fontFamily: 'BMJUA'}}> To Do List Application</Text>
          {/* <Image source={require('./todo_asset/headerLogo.png') } style={{marginLeft : 35, marginBottom : 35}} /> */}
          <View style={{width:"100%" }} />
        </View>
        <View style={styles.content}>
          {/* flexDirection : 가로 세로의 설정 row or column */}
          {/* 기본 : padding은 자식element와의 패딩이며, margin은 부모element와의 margin*/}
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{color: 'white', fontSize:18 , fontFamily: 'BMJUA', paddingLeft:20}}>아이디</Text>
            <TextInput style={{color:'white', borderColor: 'white', width:'70%', height:35, borderWidth: 5, borderRadius: 5, padding:5}}
            onChangeText={(userId) => setUserId(userId) }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:18 , color: 'white', fontFamily: 'BMJUA', paddingLeft:17}}>비밀번호</Text>
            <TextInput style={{color:'white', borderColor: 'white', width:'70%', height:35, borderWidth: 5, borderRadius: 5, padding:5}}
            onChangeText={(userPwd) => setUserPwd(userPwd) }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10, width:'80%'}}>
            <TouchableOpacity style={{width:'90%', height:43, marginTop:10, marginLeft: 55, borderColor: 'white', borderWidth: 5, borderRadius:10 }}
            onPress={loginConfirm}>
               <Text style={{fontSize: 25, fontFamily:'BMJUA', marginLeft: 90, marginTop: 5, color:'white'}}>로 그 인</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10, width:'80%'}}>
          <TouchableOpacity style={{width:'90%', height:43, marginTop:10, marginLeft: 55, borderColor: 'white', borderWidth: 5, borderRadius:10 }}
           onPress={()=> navigation.navigate('Assign')}>
               <Text style={{fontSize: 25, fontFamily:'BMJUA', marginLeft: 70, marginTop: 5, color:'white'}}>회 원 가 입</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{textDecorationLine: 'underline', fontFamily:'BMJUA', color:'white', fontSize:18, marginLeft:103 }} >
              아이디 / 비밀번호 찾기
            </Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center',paddingBottom:10, marginTop:20}}>
            <TouchableOpacity onPress={toggleModal}>
            <Image source={require('./todo_asset/naver.png') }  resizeMode={"cover"} 
            style={{width: 250 ,height : 28, marginLeft : 3, marginBottom : 10 , borderWidth: 3}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
            <Image source={require('./todo_asset/google.png')} 
            style={{width: 250 ,height : 28, marginLeft : 3, marginBottom : 10}}
            onPress={() => this.toggleModal}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
            <Image source={require('./todo_asset/kakao.png')} 
            style={{width: 250 ,height : 27, marginLeft : 3, marginBottom : 10}}  
            onPress={() => this.toggleModal}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
            <Image source={require('./todo_asset/face.png')} 
            style={{width: 250 ,height : 27, marginLeft : 3, marginBottom : 10}}
            onPress={() => this.toggleModal}/>
            </TouchableOpacity>
          </View>
         </View>
        <Modal isVisible={isModalVisible} animationType='slide' transparent={true}>
          <View style={{flex:1, alignItems:'center', width:300, height:250, marginTop:300, marginLeft:36}}>
            <Text style={{fontFamily:'BMJUA'}}></Text>
            <Button style={{fontFamily:'BMJUA'}} title=" 아직 구현되지 않은 기능입니다." onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }

export default LoginScreen; 
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