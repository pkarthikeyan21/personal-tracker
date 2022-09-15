

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from "@screens/Auth";
export default function AuthNavigation() {
    const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={"Auth"}>
    <AuthStack.Screen options={{headerShown:false}} name="Auth"
     component = {Auth}
     />
  </AuthStack.Navigator>
  )
}
