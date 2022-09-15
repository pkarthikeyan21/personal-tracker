import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function DashBoardNavigation() {
    const DashBoardStack = createNativeStackNavigator();
  return (
    <DashBoardStack.Navigator initialRouteName={"Logo"}>
    <DashBoardStack.Screen options={{headerShown:false}} name="Auth"
  //    component = {Auth}
     />
    <DashBoardStack.Screen options={{headerShown:false}} name="Logo" 
  //   component = {Logo}
     />
    <DashBoardStack.Screen options={{headerShown:false}} name="Home" 
  //   component = {Home} 
    />
  </DashBoardStack.Navigator>
  )
}
