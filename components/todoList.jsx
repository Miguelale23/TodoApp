import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import uuid from 'react-native-uuid';
import TodoItem from "./todoItem";

export default function TodoList( { todos, deleteTodo } ) {
    return (
        <View top={80} left={20}>  
            <Text style={styles.textTodoList}>ToDo list</Text>
            {todos.map(todo => {
                return (
                    <TodoItem 
                    keyId={todo.key} 
                    title={todo.title} 
                    completed={todo.completed}
                    deleteTodo={deleteTodo}>
                    </TodoItem>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    textTodoList:{
        fontSize:20,
        fontWeight:'bold'
    }
});
