import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function InputBar( { addTodo } ) {
    const [text, setText] = useState('asdd')

    function handleSubmit(){

        if (text === "") return

        addTodo(text)

        setText("")
    }

    return (
        <View
        style={styles.container}>
            <Text style={styles.textTodo}>ToDo</Text>
            <TextInput
            style={styles.inputText} value={text} onChangeText={setText}
            onSubmitEditing={handleSubmit}/>
            <View style={styles.button}>
                <Button title="Add" onPress={handleSubmit}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      top: 100
    },
    textTodo:{
        fontSize:40,
        bottom:10
    },
    inputText:{
      width: 200,
      backgroundColor: 'black',
      color: 'white',
      paddingLeft: 5
    },
    button:{
        left:125,
        bottom:32
    }
});