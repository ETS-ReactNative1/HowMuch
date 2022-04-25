import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomerLogin from '../screens/Customer/Auth/CustomerLogin/CustomerLogin'
import CoustomerGetStarted from '../screens/Customer/Auth/CustomerLogin/CustomerGetStarted'
import CustomerHome from '../screens/Customer/CustomerHome/CustomerHome'
import CustomerFeeds from '../screens/Customer/CustomerFeeds/CustomerFeeds'
import CustomerSignup from '../screens/Customer/Auth/CustomerSignup/CustomerSignup'
import CustomerRestPassword from '../screens/Customer/Auth/CustomerRestPassword/CustomerRestPassword'
import CustomerOtp from '../screens/Customer/Auth/CustomerOtp/CustomerOtp'
import CustomerUpdatePassword from '../screens/Customer/Auth/CustomerUpdatePassword/CustomerUpdatePassword'
import CustomerCreateProduct from '../screens/Customer/CustomerCreateProduct/CustomerCreateProduct'
import CreatePost from '../screens/Customer/CreatePost/CreatePost'
import CustomerMessages from '../screens/Customer/CustomerMessages/CustomerMessages'
import CustomerProducts from '../screens/Customer/CustomerProducts/CustomerProducts'
import CustomerSelectCategory from '../screens/Customer/CustomerSelectCategory/CustomerSelectCategory'
import CustomerProductDetails from '../screens/Customer/CustomerProductDetails/CustomerProductDetails'
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
      <CustomerApp.Screen name="CustomerFeeds" component={CustomerFeeds} />
      <CustomerApp.Screen
        name="CustomerCreateProduct"
        component={CustomerCreateProduct}
      />
      <CustomerApp.Screen name="CreatePost" component={CreatePost} />
      <CustomerApp.Screen
        name="CustomerSelectCategory"
        component={CustomerSelectCategory}
      />
      <CustomerApp.Screen
        name="CustomerProducts"
        component={CustomerProducts}
      />
      <CustomerApp.Screen
        name="CustomerMessages"
        component={CustomerMessages}
      />
      <CustomerApp.Screen
        name="CustomerProductDetails"
        component={CustomerProductDetails}
      />
    </CustomerApp.Navigator>
  )
}
