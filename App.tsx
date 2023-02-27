import {useState, useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import {ContextProvider} from './src/context/TaskContext';
import Header from './src/components/Header/Header';
import Main from './src/Main/Main';

const App = () => {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <Header />
        <Main />
      </ContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#18122B',
  },
});

export default App;
