import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, backgroundColor, ScrollView } from 'react-native';
import DoctorsScreen from './screens/DoctorsScreen';
import MapScreen from './screens/MapScreen';
import AddDoctorScreen from './screens/AddDoctorScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DoctorScreen" component={DoctorsScreen} />
        <Stack.Screen name="AddDoctorScreen" component={AddDoctorScreen} />
        <Stack.Screen name="Harita" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
