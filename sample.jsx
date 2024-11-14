import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks,setTasks] = useState([]);
    const [task,setTask]= useState("");

    function addTask () {
        setTask(inputValue);
        setTasks(task)

        
        // setInputValue("");
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Day</Text>
      <Text>{tasks[0]}</Text>
      <TextInput
        onChangeText={(text)=>setInputValue(text)}
        style={styles.inputContainer}
        placeholder="Enter your task"
        value={inputValue}
        keyboardType="default"
      />
      <Text style={styles.subtitle}>tasks are {task}</Text>
      <Button title='Add Task' onPress={addTask}/>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: 20,
    backgroundColor: 'orangered',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
});
