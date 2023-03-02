import {StyleSheet, View} from 'react-native';
import {TasksProvider} from './context/TaskContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main/Main';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TasksProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" options={{title: 'TODO LIST'}}>
            {props => (
              <View style={styles.container}>
                <Main {...props} />
              </View>
            )}
          </Stack.Screen>
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
