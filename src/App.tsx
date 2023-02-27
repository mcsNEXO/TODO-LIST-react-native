import {useState, useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import {ContextProvider} from './components/context/TaskContext';
import Header from './components/Header/Header';
import Main from './Main/Main';

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
    backgroundColor: '#1C315E',
  },
});

export default App;
