
import { StyleSheet, Text, View } from 'react-native';
import First from './First';
import RandoQuotes from './app/datas/component/RandomQoutes';
import RandomQuotes from './app/datas/component/RandomQoutes';
import Todo from './Todo app/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo/>
    </View>
   
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
  }
})


