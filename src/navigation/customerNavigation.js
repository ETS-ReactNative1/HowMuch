import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomerLogin from '../screens/Customer/Auth/CustomerLogin/customerLogin'
import CustomerSignup from '../screens/Customer/Auth/CustomerSignup/CustomerSignup'
const CustomerAuthStack = createStackNavigator()
const BusinessApp = createStackNavigator()

export function CustomerAuth() {
  return (
    <CustomerAuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="CustomerLogin">
      <CustomerAuthStack.Screen
        name="CustomerLogin"
        component={CustomerLogin}
      />
      <CustomerAuthStack.Screen
        name="CustomerSignup"
        component={CustomerSignup}
      />
    </CustomerAuthStack.Navigator>
  )
}
