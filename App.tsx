import {StyleSheet, View} from 'react-native';
import {TasksProvider} from './src/context/TaskContext';
import Main from './src/screens/Main/Main';

const App = () => {
  return (
    <View style={styles.container}>
      <TasksProvider>
        <Main />
      </TasksProvider>
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
