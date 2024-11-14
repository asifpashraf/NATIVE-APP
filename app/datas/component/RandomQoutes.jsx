import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
// import Qoutes from '../Qoute'
import Quotes from '../Qoute'

const RandomQuotes = () => {
  const [motivation,setMotivation] = useState("its a good day to begin")
  const [author,setAuthor] =useState("some one great will be here")
  
  function generate (){
    const randomIndex =Math.floor(Math.random()*Quotes.length)
    const randomText =Quotes[randomIndex].text
    const randomAuthor =Quotes[randomIndex].author
    setMotivation(randomText)
    setAuthor(randomAuthor)
    }
    
    return (
      <View style={styles.containers}>
      <Text>its a new world</Text>
      <Text>{motivation}</Text>
      <Text>{author}</Text>
      <Button onPress={generate} title='generate Qoutes'/>
    </View>
  )
}

export default RandomQuotes

const styles = StyleSheet.create({
  containers:{
    flex: 0,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
  }
})