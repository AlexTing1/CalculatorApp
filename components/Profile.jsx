import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, View, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Profile({ navigation, route, count }) {
  return (
    <ScrollView>
      <Text>This is {route.params.name}'s profile</Text>
      <Text>You Clicked {route.params.count} times</Text>
    </ScrollView>

  )
}

export default Profile;
