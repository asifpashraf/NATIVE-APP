
import { StyleSheet, Text, View } from 'react-native';
import First from './First';
import RandoQuotes from './app/datas/component/RandomQoutes';
import RandomQuotes from './app/datas/component/RandomQoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <RandomQuotes/>
      {/* <First/> */}
    </View>
   
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignContent:'center',
    justifyContent:'center',
  }
})


