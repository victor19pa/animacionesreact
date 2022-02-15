import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';

const App = () => {

  return (
    <>
      <View style={styles.contenido}>
        
        <View style={styles.animacion}>
          <Animacion1 />
        </View>

        <View style={styles.animacion}>
          <Animacion2/>
        </View>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido:{
    marginTop: 100,
    paddingVertical: 50
  },
  animacion:{
    paddingVertical: 50
  }
});

export default App;
