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
import Animacion3 from './components/Animacion3';

const App = () => {

  return (
    <>
      <View style={styles.contenido}>
        
        <View style={styles.animacion}>
          <Animacion1 />
        </View>

        <View style={styles.animacion}>
          {/* <Animacion2/> */}
        </View>

        <View style={styles.animacion}>
          <Animacion3/>
        </View>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido:{
    paddingVertical: 10
  },
  animacion:{
    paddingVertical: 25
  }
});

export default App;
