import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as Font from 'expo-font';
import BookScreen from './screens/BookScreen';

const App = () => {

  const [loading, setLoading] = useState(true);


  const loadFont = async () => {
    try {
      await Font.loadAsync({
        'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'GT-Sectra-Fine-Regular': require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      });
      setLoading(false);
    }
    catch (e) {
      console.log('erreur:', e);
    }
  }

  useEffect(() => {
    loadFont();
  }, []);

  if(loading){
    return <View style={styles.container}>
      <Text>loading...</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <BookScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;