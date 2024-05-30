import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainScreens from "../screens/MainScreens";
import CartBtn from "./buttons/CartBtn";
import FavouriteBtn from "./buttons/FavouriteBtn";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ProductScreen from "../screens/ProductScreen";
import HomeBtn from "./buttons/HomeBtn";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Products" screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTitleAlign: 'center'}}>
    <Stack.Screen name="Products" options={() => ({
      title: 'Products',
      headerLeft: () => (
        <FavouriteBtn />
      ),
      headerRight: () => (
        <CartBtn />
      )
    })
    } component={MainScreens}/>

      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({navigation}) => ({
          title: 'Product',
          headerLeft: () => (
           <HomeBtn />
          ),
          headerRight: () => (
            <CartBtn />
          )
        })}
      />

      <Stack.Screen name="Cart" options={() => ({
        title: 'Cart',
        headerLeft: () => (
          <FavouriteBtn />
        ),
        headerRight: () => (
          <CartBtn />
        )
      })
      } component={CartScreen}/>

      <Stack.Screen name="Favourite" options={() => ({
        title: 'Favourite',
        headerLeft: () => (
          <FavouriteBtn />
        ),
        headerRight: () => (
          <CartBtn />
        )
      })
      } component={FavouriteScreen}/>
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation