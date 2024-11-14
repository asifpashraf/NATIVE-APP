import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// import Quotes from '../Qoute'
import Quotes from '../Qoute';

const RandomQuotes = () => {
  const [motivation, setMotivation] = useState("It's a good day to begin");
  const [author, setAuthor] = useState("Someone great will be here");

  function generate() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomText = Quotes[randomIndex].text;
    const randomAuthor = Quotes[randomIndex].author;
    setMotivation(randomText);
    setAuthor(randomAuthor);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> World of Quotes</Text>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{motivation}</Text>
        <Text style={styles.authorText}>- {author}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={generate}>
        <Text style={styles.buttonText}>Generate Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RandomQuotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  quoteContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 12,
    alignItems: 'center',
    
    height:'150',
    width:'320'
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    marginLeft:'120'
    
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#ff6f61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
