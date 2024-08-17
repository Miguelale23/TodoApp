import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import InputBar from '../components/inputBar'
import TodoList from '../components/todoList'

export default function Index() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () =>{
      const loadedTodos = await loadTodosData()
      setTodos(loadedTodos)
    }
    
    fetchTodos()
  }, [])

  const loadTodosData = async() => {

    const jsonValue = await AsyncStorage.getItem('@todos');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  }

  const saveTodosData = async(newTodos) => {
    
    const jsonValue = JSON.stringify(newTodos);
    await AsyncStorage.setItem('@todos', jsonValue);
  }

  function addTodo(text){
    newTodos = [...todos, {key : uuid.v4(), title: text}]
    saveTodosData(newTodos)
    setTodos(newTodos)
  }

  function removeTodo(key){
    setTodos(currentTodos => 
      currentTodos.filter(todo => todo.key !== key)
    );
  }

  return (
    <View>
      <InputBar addTodo={addTodo}></InputBar>
      <TodoList todos={todos} deleteTodo={removeTodo}></TodoList>
    </View>
  );
}
