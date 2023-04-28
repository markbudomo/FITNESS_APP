import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ImageBackground } from 'react-native';
import { FitnessContext } from './Context';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';


export default function App() {
  return (
    <FitnessContext>
      <StackNavigator /> 
    </FitnessContext>
  ); 
}

const styles = StyleSheet.create({

});
