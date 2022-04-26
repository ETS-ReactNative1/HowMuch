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
import { Profile } from '../screens/Customer/CutomerProfile/Profile'
import { EditProfile } from '../screens/Customer/CutomerProfile/EditProfile'
import CustomerServices from '../screens/Customer/CustomerServices/CustomerServices'
import CustomerProductDetails from '../screens/Customer/CustomerProductDetails/CustomerProductDetails'
import ServicesDetail from '../screens/Customer/ServicesDetail/ServicesDetail'
import { CustomerNotification } from '../screens/Customer/CustomerNotification/CustomerNotification'
import CustomerIntersted from '../screens/Customer/CustomerIntersted/CustomerIntersted'
import PurchaseHistory from '../screens/Customer/CustomerPurchaseHistory/CustomerPurchaseHistory'
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
      <CustomerApp.Screen name="Profile" component={Profile} />
      <CustomerApp.Screen name="EditProfile" component={EditProfile} />
      <CustomerApp.Screen
        name="CustomerServices"
        component={CustomerServices}
      />
      <CustomerApp.Screen
        name="CustomerProductDetails"
        component={CustomerProductDetails}
      />
      <CustomerApp.Screen name="ServicesDetail" component={ServicesDetail} />
      <CustomerApp.Screen
        name="CustomerNotification"
        component={CustomerNotification}
      />
      <CustomerApp.Screen
        name="CustomerIntersted"
        component={CustomerIntersted}
      />
      <CustomerApp.Screen name="PurchaseHistory" component={PurchaseHistory} />
    </CustomerApp.Navigator>
  )
}
