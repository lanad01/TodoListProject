import React, {Component} from "react";
import {Alert, ImageBackground, StyleSheet, Text, View, Button} from "react-native";

const karina = require('../assets/karina.jpg')
const winter = require('../assets/winter.jpg')
const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMember: 'karina',
            img : require('../assets/karina.jpg')
        }
    }
    changeMember=() =>{   
        //  alert(this.state.currentMember);
         if(this.state.currentMember==='karina'){
           this.setState( {currentMember : 'winter' });
           this.setState( {img : require('../assets/winter.jpg')})
         }else if(this.state.currentMember==='winter'){
          this.setState( {currentMember : 'karina' });
          this.setState( {img : require('../assets/karina.jpg')})
    }
   }
    render() {
        return (
               <ImageBackground source={this.state.img} resizeMode="cover" style={styles.image}>
               <Text style={styles.text} onPress={this.changeMember}>{this.state.currentMember}</Text>
               <Text style={styles.text}> {this.state.img}</Text>
               </ImageBackground>
              
        );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});
