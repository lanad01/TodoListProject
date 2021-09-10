import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainScreen ({route}) { // route가  이전 Stack에서 보낸 Json 정보를 사용할 수 있다.

    const { token, presentUser } = route.params;

    const [add, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false); 

    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("");
    const [expiration, setExpiration ] = useState(new Date());
    var formatteddate=format(expiration, "MMMM do EEE yyyy");
    const [open, setOpen] = useState(false);

    function confirmDelete(){
        setDeleteModal(!deleteModal);
    }
    function addModal(){
      AsyncStorage.setItem('taskName', JSON.stringify(taskName));
      AsyncStorage.setItem('priority', JSON.stringify(priority));
      AsyncStorage.setItem('expiration', JSON.stringify(formatteddate));
      setAddModal(!add);
    }
    function getTaskInfo(){
      var taskMap = AsyncStorage.getItem(presentUser).filter

      AsyncStorage.getItem('taskName', (err, value) => {
        const newTaskName=JSON.parse(value)
        alert(newTaskName);
      })
      AsyncStorage.getItem('priority', (err, value) => {
        const newPriority=JSON.parse(value)
      })
      AsyncStorage.getItem('expiration', (err, value) => {
        const newexpiration=JSON.parse(value)
      })
    }
    function exitTaskModal(){
      setAddModal(!add);
    }
    return (
      
      <View style={styles.container}>
        <View style={styles.header}>
        </View> 
        <View style={styles.content}>
          
        <Text style={styles.welcomingMsg}> {presentUser} 님 환영해요! </Text>
        <Text style={styles.welcomingMsg}> Token의 상태 : {token} </Text>

          {/* flexDirection : 가로 세로의 설정 row or column */}
          {/* 기본 : padding은 자식element와의 패딩이며, margin은 부모element와의 margin*/}
            <View style={styles.taskContainer}>
                <Image source={require('./todo_asset/task2.png')}  style={{marginLeft:0, marginTop:0, width:'10%', height:43}} />
                <View style={styles.tasks}>
                    <Text style={styles.tasksText} > Take a break</Text>
                    <View>
                    <TouchableOpacity onPress={confirmDelete}>
                        <Image source={require('./todo_asset/bin.png')} style={{marginRight:5,marginTop:4, width:40, height:29}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.taskContainer}>
                <Image source={require('./todo_asset/task2.png')}  style={{marginLeft:0, marginTop:0, width:'10%', height:43}} />
                <View style={styles.tasks}>
                    <Text style={styles.tasksText} > Take a break</Text>
                    <View>
                    <TouchableOpacity onPress={confirmDelete}>
                        <Image source={require('./todo_asset/bin.png')} style={{marginRight:5,marginTop:4, width:40, height:29}}/>
                    </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
            <View style={styles.taskContainer}>
                <Image source={require('./todo_asset/task2.png')}  style={{marginLeft:0, marginTop:0, width:'10%', height:43}} />
                <View style={styles.tasks}>
                    <Text style={styles.tasksText} > Take a break</Text>
                    <View>
                    <TouchableOpacity onPress={confirmDelete}>
                        <Image source={require('./todo_asset/bin.png')} style={{marginRight:5,marginTop:4, width:40, height:29}}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
         </View>
         <View style={styles.footer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10, marginLeft:12}}>
                <TextInput style={{backgroundColor:'white', borderColor: 'white', width:'85%', height:45,
                borderWidth: 2, borderRadius: 9, padding:5}}/>
                <TouchableOpacity onPress={addModal}>
                <Image source={require('./todo_asset/add.png')} style={{marginRight:0}}/> 
                </TouchableOpacity>
            </View>
            
         </View>

        {/* Modal Component from here*/}

        <Modal isVisible={deleteModal} animationType='slide' transparent={true}>
          <View 
           style={{flex:1, alignItems:'center', backgroundColor:'white', width:300, height:50, marginTop:300, marginBottom:300, marginLeft:27}}>
            <Text style={{fontFamily:'BMJUA'}}></Text>
            <Button title=" 정말로 삭제 하시겠습니까? " onPress={confirmDelete} />
          </View>
        </Modal>
        <Modal isVisible={add} animationType='slide' transparent={true}>
          <View style={styles.addModal}>
            <Text style={{fontFamily:'BMJUA', fontSize: 18, color:'white', marginTop:10}}>New Task</Text>
            <View style={styles.addTaskContent}>
                <Text style={{fontFamily:'BMJUA', fontSize: 15, color:'white', marginRight:10}}>Task 명 : </Text>
                <TextInput 
                 style={{borderColor: 'white', backgroundColor:'white', width:'60%', height:35, borderWidth: 2, borderRadius: 5, padding:5}}
                 onChangeText={(taskName) => setTaskName(taskName)}/>
            </View>
            <View style={styles.addTaskContent}>
                <Text style={{fontFamily:'BMJUA', fontSize: 15, color:'white', marginLeft:20}}>Priority : </Text>
                <View style={{flex:1, marginLeft: 8}}>
                  <Picker selectedValue={priority} onValueChange={(priority)=> setPriority(priority)}
                  style={{width: 170, height:50 ,backgroundColor:'white' }} mode="dropdown">
                    <Picker.Item label="High" value="High"/>
                    <Picker.Item label="Middle" value="Middle"/>
                    <Picker.Item label="Low" value="Low"/>
                  </Picker>
                </View>  
            </View>
            <View style={styles.addTaskContent}>
              <TextInput value={formatteddate} placeholder="Task Date" defaultValue={formatteddate} editable = {false}
                 style={{borderColor: 'white', backgroundColor:'white', width:'60%', height:35, borderWidth: 2, borderRadius: 5, padding:5}}/>
              <TouchableOpacity 
              style={{backgroundColor: 'white', marginTop:0, borderStyle:'dotted', 
              borderWidth:4, borderColor:'white', width:70, alignItems:'center', marginLeft:10}} 
              onPress={() => setOpen(true)}>
                <Text style={{fontFamily:'BMJUA', fontSize: 17, color:'#191970', marginRight:0}}>날짜지정</Text>
              </TouchableOpacity>
              <DatePicker modal open={open} date={expiration} 
                onConfirm={(expiration) => { setOpen(false)
                setExpiration(expiration)
                }}
                onCancel={() => {
                setOpen(false)
                }}/>
            </View>
            <View style={styles.addTaskContent}>
              <TouchableOpacity style={{marginTop:20, marginRight:10, borderWidth:3, borderColor:'white', width:70, alignItems:'center'}}
                onPress={addModal}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white'}}>등 록</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:20, borderWidth:3, borderColor:'white', width:70, alignItems:'center'}} 
                onPress={exitTaskModal}>
                <Text style={{fontFamily:'BMJUA', fontSize: 19, color:'white', marginRight:0}}>나가기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  welcomingMsg:{
    fontFamily:'BMJUA',
    fontSize:23,
    color:'white',
  },
  tasks:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    backgroundColor: 'white',
    width:'88%',
    height:50,
    borderRadius:10,
  },
  taskContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    marginTop:20
  },
  tasksText:{
    fontFamily:'BMJUA',
    fontSize:20,
    marginLeft:15
  },
  footer: {
    width:'100%',
    height:'20%',
    marginBottom:-50
    //backgroundColor: '#1ad657',
  },
  addModal:{
    flex:1, alignItems:'center',
    backgroundColor:'#191970',
    borderWidth:5,
    borderColor:'white',
    borderRadius:30,
    width:300,
    marginTop:200,
    marginBottom:200,
    marginLeft:27
  },
  addTaskContent :{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:12
  },
});