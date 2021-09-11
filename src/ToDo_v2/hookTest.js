import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
 
export default class App extends Component {
 
  state = {
    text: '',
    inputText: ''
 
  }
 
  submitBtn = () => {
    this.setState({text: this.state.inputText});
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>TextInput 가지고 놀아보자</Text>
        <View style={styles.bodyContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="아무거나 입력해주세요."
          />
          <Button title="제출" onPress = {this.submitBtn} />
          <Text style = {styles.showText}>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFEAD0',
      paddingHorizontal: 30,
      flex: 1,
    },
    headerText: {
      paddingTop: 50,
      alignItems: 'center',
      fontSize: 30,
    },
    bodyContainer: {
      backgroundColor: '#FDF5DC',
      paddingHorizontal: 20,
      marginVertical: 30,
      flex: 1
    },
    textInput: {
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 10,
      height: 40,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },
    showText: {
      marginTop: 10,
      fontSize: 25,
    }
  })