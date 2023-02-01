import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/router';
import { configureStore } from './src/redux/store';
import { Provider } from 'react-redux';

const store = configureStore()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />

      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
