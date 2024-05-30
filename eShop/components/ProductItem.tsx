import React, { FC } from "react";
// @ts-ignore
import styled from "styled-components/native";
import { Image, Pressable, Text, View } from "react-native";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types";
import FavouriteStore from "../store/FavouriteStore";
import { observer } from "mobx-react-lite";

interface Props {
  product: Product
}

const ProductItem: FC<Props> = observer(({product}) => {
  const navigate = useNavigation()

  const onClick = () => {
    // @ts-ignore
    navigate.navigate('Product', {
      item: product
    })
  }

  return <ViewProduct>
    <UserTouchable onPress={onClick}>
    <Image  style={{
      width: "100%",
      aspectRatio: 1,
      height: 'auto',
      borderRadius: 10,
    }} source={{uri: product.avatar}} />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
        <Text style={{color: '#000', fontSize: 17}}>{product.title}</Text>
        <Pressable
          style={{marginTop:6, marginBottom: 6, alignSelf: 'flex-end', flexShrink: 0}}
          onPress={() => {
            if (FavouriteStore.favourite.has(product.id)) {
              FavouriteStore.removeFromFavourite(product.id)
            } else {
              FavouriteStore.addToFavourite(product.id)
            }
          }}>
          {FavouriteStore.favourite.has(product.id) ?
            <HeartIconSolid size={30} color={'#000'} />
            :
            <HeartIconOutline size={30} color={'#000'} />
          }
        </Pressable>
      </View>
    <View style={{flexDirection: 'column', paddingLeft: 10, paddingRight: 10, marginTop: 3, marginBottom: 15}}>
      <Text style={{color: '#000', fontSize: 17}}>{product.price} $</Text>
    </View>
  </UserTouchable>
  </ViewProduct>
})

const ViewProduct = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const UserTouchable = styled.TouchableOpacity`
  width: 100%;
  padding: 0 10px;
`

export default ProductItem