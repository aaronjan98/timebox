import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App() {
  return(
    <SafeAreaView style={styles.root}>
      <Text>Hello World</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  }
})

export default App;
