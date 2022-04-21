import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomerLogin from '../screens/Customer/Auth/CustomerLogin/CustomerLogin'
import CoustomerGetStarted from '../screens/Customer/Auth/CustomerLogin/CustomerGetStarted'
import CustomerHome from '../screens/Customer/CustomerHome/CustomerHome'
import CustomerFeeds from '../screens/Customer/CustomerFeeds/CustomerFeeds'
const CustomerAuthStack = createStackNavigator()
const CustomerApp = createStackNavigator()

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
        name="CoustomerGetStarted"
        component={CoustomerGetStarted}
      />
    </CustomerAuthStack.Navigator>
  )
}


export function CustomeAppStack() {
  return (
    <CustomerApp.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="CustomerHome">
      <CustomerApp.Screen
        name="CustomerHome"
        component={CustomerHome}
        // component={CustomerDrawerNavigator}
      />
          <CustomerApp.Screen
        name="CustomerFeeds"
        component={CustomerFeeds}
      />
    </CustomerApp.Navigator>
  )
}