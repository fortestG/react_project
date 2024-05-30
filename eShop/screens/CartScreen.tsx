import React, { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";
import CartProduct from "../components/CartProduct";
import { observer } from "mobx-react-lite";


const CartScreen: FC = observer(() => {
  let data = ProductStore.products.filter((product) => {
    return CartStore.cart.has(product.id)
  })
  let sum = data.map((product) => {
    return {price: product.price, id: product.id}
  }).reduce((accumulator, current) => {
    return accumulator + parseInt(current.price) * CartStore.cartAmount.get(current.id);
  }, 0)

  return <View style={{
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    justifyContent: "space-between",
  }}>
    <FlatList
      data={data}
      renderItem={({item}) => (<CartProduct product={item} />)}
      keyExtractor={(item) => item.id}
    />
    <View>
      <Text style={{
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 8
      }}>Total: {sum}$</Text>
      <Pressable
        onPress={() => {
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 16,
          backgroundColor: 'rgb(0,0,0)',
          width: "100%",
          marginBottom: 32
        }}>
        <Text style={{
          fontSize: 18,
          color: "white",
          fontWeight: "500",
        }
        }>Buy</Text>
      </Pressable>
    </View>
  </View>
})

export default CartScreen