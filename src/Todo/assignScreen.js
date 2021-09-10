import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function MainScreen ({navigation}) {

  const [userId, setUserId]=useState('');
  const [userPwd, setUserPwd]=useState('');
  const [userName, setUserName]=useState('');
  const [userEmail, setUserEmail]=useState('');

  function duplicationCheck(){
    alert('Duplication Check')
  }
  function submitPress () {
    AsyncStorage.setItem('newId', JSON.stringify(userId));
    AsyncStorage.setItem('newPwd', JSON.stringify(userPwd));
    AsyncStorage.setItem('newName', JSON.stringify(userName));
    AsyncStorage.setItem('newEmail', JSON.stringify(userEmail));
    navigation.navigate('Main')

  };
  
  function getUserInfo (){
    AsyncStorage.getItem('newId', (err, value) => {
        const newId=JSON.parse(value) 
      })
    AsyncStorage.getItem('newPwd', (err, value) => {
      const newPwd=JSON.parse(value) 
      }
    )
    AsyncStorage.getItem('newName', (err, value) => {
      const newName=JSON.parse(value) 
      }
    )
    AsyncStorage.getItem('newPwd', (err, value) => {
      const newEmail=JSON.parse(value) 
      }
    )
}
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>회 원 가 입</Text>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.assignCategoryId}>  I D : </Text> 
            <TextInput style={styles.assignInputId}
            onChangeText={(userId) => setUserId(userId) }/>
            <TouchableOpacity style={styles.duplicationCheck}
            onPress={duplicationCheck}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white', marginRight:0}}>중복확인</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.assignPwdText}>  비밀번호 : </Text> 
            <TextInput style={styles.assignInputText}
            onChangeText={(userPwd) => setUserPwd(userPwd) }/>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.assignPwdText}>  이 름 : </Text> 
            <TextInput style={styles.assignInputText}
            onChangeText={(userName) => setUserName(userName) }/>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.assignPwdText}>  E-mail : </Text> 
            <TextInput style={styles.assignInputEmail}
            onChangeText={(userEmail) => setUserEmail(userEmail) }/>
          </View>
          <View style={styles.taskContainer}>
          <TouchableOpacity style={styles.goBack}
          onPress={()=> navigation.navigate('Login')}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white'}}>나가기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}
          onPress={submitPress}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white'}}>회 원 등 록</Text>
          </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.confirmButton}
          onPress={getUserInfo}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white'}}>회 원 등 록</Text>
          </TouchableOpacity>
      </View>
    );
  }

export default MainScreen; 
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
    marginTop:-30
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
  taskContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    marginTop:40
  },
  tasksText:{
    fontFamily:'BMJUA',
    fontSize:20,
    marginLeft:15
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    marginTop:15,
    borderBottomWidth:3,
    borderColor:'white',
    borderStyle:'dashed',
    width:140
  },
  headerText:{
    fontFamily:'BMJUA',
    fontSize:22,
    color:'white',
    marginLeft:10,
  },
  assignCategoryId:{
    fontFamily:'BMJUA',
    fontSize:22,
    color:'white',
    marginLeft:10,
    marginRight:10,
    width:50
  },
  assignInputId:{
    borderColor: 'white',
    backgroundColor:'white',
    width:'50%', 
    height:35,
    borderWidth: 2,
    borderRadius: 5, 
    padding:5,
    marginRight:20
  },
  duplicationCheck:{
    borderWidth:3,
    borderColor:'white', 
    width:70, 
    alignItems:'center',
    marginRight:100
  },
  assignPwdText:{
    fontFamily:'BMJUA',
    fontSize:22,
    color:'white',
    width:100
  },
  assignInputText:{
    borderColor: 'white',
    backgroundColor:'white',
    width:'50%', 
    height:35,
    borderWidth: 2,
    borderRadius: 5, 
    padding:5,
    marginRight:60
  },
  assignInputEmail:{
    borderColor: 'white',
    backgroundColor:'white',
    width:'70%', 
    height:35,
    borderWidth: 2,
    borderRadius: 5, 
    padding:5,
    marginRight:60
  },
  goBack:{
    borderWidth:3,
    borderColor:'white', 
    width:110, 
    alignItems:'center',
    marginLeft:50,
  },
  confirmButton:{
    borderWidth:3,
    borderColor:'white', 
    width:110, 
    alignItems:'center',
    marginRight:50
  },
});