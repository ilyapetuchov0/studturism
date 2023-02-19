import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Illustration from './assets/icons/Work_7.svg';
import Logo from './assets/icons/logo.svg';
import HomeScreen from './screens/HomeScreen';
import FullScreen from './screens/FullScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import TaskScreen from './screens/TaskScreen';
import CalendarScreen from './screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Добро пожаловать" options={{headerShown: false}} />
        <Stack.Screen component={HomeScreen} name="Куда поехать" options={{headerBackVisible: false}} />
        <Stack.Screen component={FullScreen} name="FullScreen" options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
      <View style={{marginTop: 50}}>
        <Logo />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Illustration width={300} height={300} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Куда поехать')} style={{backgroundColor: '#446FFF', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Давайте начнём</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;