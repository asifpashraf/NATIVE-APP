import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask() {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Good Day</Text>
            <TextInput
                onChangeText={(text) => setInputValue(text)}
                style={styles.inputContainer}
                placeholder="Enter your task"
                value={inputValue}
                keyboardType="default"
            />
            <Button title="Add Task" onPress={addTask} />
            <Text style={styles.subtitle}>Your Tasks:</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.task}>{item}</Text>
                )}
            />
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
        marginTop: 10,
    },
    task: {
        fontSize: 16,
        color: '#fff',
        paddingVertical: 5,
    },
});
