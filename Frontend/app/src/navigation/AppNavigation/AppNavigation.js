import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from "@navigation/AuthNavigation"
import { useSelector } from 'react-redux';
import DashBoardNavigation from "@navigation/DashBoardNavigation"
export default function AppNavigation() {
  const state = useSelector((state) => state)
  const { isAuthenticated } = state;
  return (
    <NavigationContainer>
           {isAuthenticated  ? <DashBoardNavigation /> :  <AuthNavigation />} 
    </NavigationContainer>
  )
  }