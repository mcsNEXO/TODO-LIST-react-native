import {StyleSheet, View} from 'react-native';
import {TasksProvider} from './context/TaskContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main/Main';
import Maps from './screens/Maps/Maps';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TasksProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {() => (
              <View style={styles.container}>
                <Main />
              </View>
            )}
          </Stack.Screen>
          <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
      </TasksProvider>
    </NavigationContainer>
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
