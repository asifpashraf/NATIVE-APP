import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const First = () => {
  return (
    <View style={styles.container}>
    <Text>cool boy come on</Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default First

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });