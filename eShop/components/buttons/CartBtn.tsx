import React from "react";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ShoppingBagIcon as ShoppingBagIconSolid } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import styled from "styled-components/native";
import { observer } from "mobx-react-lite";
import CartStore from "../../store/CartStore";


const CartBtn: FC = observer(() => {
  const navigation = useNavigation()

  const cartCount = () => {
    let sum = 0
    if (CartStore.cartAmount.size === 0) return  0

    // @ts-ignore
    for (const value of CartStore.cartAmount.values()) {
      sum += value
    }
   return sum
  }

  const onPress = (name: String) => {

    // @ts-ignore
    navigation.navigate(name)
  }

return <TouchableOpacity style={{width: 25, height: 25}}  activeOpacity={1} onPress={() => onPress("Cart")}>
  <ShoppingBagIconSolid size={25} fill={'#000'} />
  <ViewCounter>
    <Text style={{color: '#fff', fontSize: 11}}>{cartCount()}</Text>
  </ViewCounter>
</TouchableOpacity>
})

const ViewCounter = styled.View`
  position: absolute;
  left: 15px;
  top: -10px;
  padding: 2px 6px;
  border-radius: 100px;
  background-color: #de0b6e;
  font-size: 11px;
  line-height: 13px;
  font-weight: 900;
  text-align: center;
`

export default CartBtn