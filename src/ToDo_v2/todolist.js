import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState } from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';


export default function TodoList({title, priority, expiration}){
    const renderItem=({ item }) => {
        // alert("todo List pge : "+title);
        return(
            <View style={styles.container}>
                <Text style={styles.list}>{title}</Text>
                <Text style={styles.list}>{priority}</Text>
                <Text style={styles.list}>{expiration}</Text>

            </View>
        )
    }
    
    return(
        <SafeAreaView>
            <FlatList data={title} renderItem={renderItem} keyExtractor={(item)=> String(item.name)}>
            </FlatList>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    list: {
      flex: 1,
      padding: 10,
      color:'white',
      backgroundColor: '#191970',
      fontFamily:'BMJUA',
    },
    container:{
        flexDirection:'row',
        
    },
});