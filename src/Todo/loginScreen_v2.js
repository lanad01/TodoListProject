import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';

function LoginScreen_v2 ({navigation}) {

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
            <TextInput style={{color:'white', borderColor: 'white', width:'70%', height:35, borderWidth: 5, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:18 , color: 'white', fontFamily: 'BMJUA', paddingLeft:17}}>비밀번호</Text>
            <TextInput style={{color:'white', borderColor: 'white', width:'70%', height:35, borderWidth: 5, borderRadius: 5, padding:5}}/>
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