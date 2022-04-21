import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomerLogin from '../screens/Customer/Auth/CustomerLogin/customerLogin'
import CustomerSignup from '../screens/Customer/Auth/CustomerSignup/CustomerSignup'
import CustomerRestPassword from '../screens/Customer/Auth/CustomerRestPassword/CustomerRestPassword'
import CustomerOtp from '../screens/Customer/Auth/CustomerOtp/CustomerOtp'
import CustomerUpdatePassword from '../screens/Customer/Auth/CustomerUpdatePassword/CustomerUpdatePassword'
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
      <CustomerAuthStack.Screen
        name="CustomerRestPassword"
        component={CustomerRestPassword}
      />
      <CustomerAuthStack.Screen
        name="CustomerUpdatePassword"
        component={CustomerUpdatePassword}
      />
      <CustomerAuthStack.Screen name="CustomerOtp" component={CustomerOtp} />
    </CustomerAuthStack.Navigator>
  )
}
