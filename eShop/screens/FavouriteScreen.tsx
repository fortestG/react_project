import React, { FC } from "react";
import { FlatList, View } from "react-native";
import ProductStore from "../store/ProductStore";
import CartProduct from "../components/CartProduct";
import FavouriteStore from "../store/FavouriteStore";
import { observer } from "mobx-react-lite";


const FavouriteScreen: FC = observer(() => {
  let data = ProductStore.products.filter((product) => {
    return FavouriteStore.favourite.has(product.id)
  })

  return <View style={{
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    justifyContent: "space-between",
  }}>
    <FlatList
      data={data}
      renderItem={({item}) => (<CartProduct product={item} isFavourite={true} />)}
      keyExtractor={(item) => item.id}
    />
  </View>
})

export default FavouriteScreen