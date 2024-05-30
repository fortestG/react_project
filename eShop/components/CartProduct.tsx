import React, { FC } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types";
import { TrashIcon as TrashIconOutline } from "react-native-heroicons/outline";
import { MinusCircleIcon as MinusCircleIconOutline} from "react-native-heroicons/outline";
import { PlusCircleIcon as PlusCircleIconOutline} from "react-native-heroicons/outline";
import CartStore from "../store/CartStore";
import FavouriteStore from "../store/FavouriteStore";
import { observer } from "mobx-react-lite";

interface Props {
  product: Product,
  isFavourite?: boolean,
}

const CartProduct:FC<Props> = observer(({product,isFavourite = false}) => {

  const navigate = useNavigation()

  const onPress = () => {
    // @ts-ignore
    navigate.navigate('Product', {item: product})
  }

  return <TouchableOpacity style={{marginBottom: 10, marginTop: 10}} onPress={onPress}><View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }}>
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      flexShrink: 1,
    }}>
      <Image
        style={{
          height: 90,
          width: 90,
          shadowRadius: 3,
          borderRadius: 15
        }}
        source={{uri: product.avatar}}
      />
      <View style={{marginStart: 16, justifyContent: "center",flexWrap: 'wrap', flexDirection: 'column'}}>
        <Text style={{fontSize: 18, fontWeight: "500", flexWrap: 'wrap', width: '80%'}}>{product.title}</Text>
        <Text style={{fontSize: 18, fontWeight: "500", color: "gray"}}>{product.price}$</Text>
        {isFavourite === false ? <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <Pressable onPress={() => {
            if (CartStore.cartAmount.get(product.id) === 1) {
              CartStore.removeFromCart(product.id)
            } else {
              CartStore.removeAmount(product.id)
            }
          }}>
            <MinusCircleIconOutline size={30} color={'#000'} />
          </Pressable>

          <Text style={{marginLeft: 10, marginRight: 10, fontSize: 14}}>{CartStore.cartAmount.get(product.id)}</Text>

          <Pressable onPress={() => {
            if (CartStore.cartAmount.get(product.id) < product.amount){ CartStore.addAmount(product.id) }
          }}>
            <PlusCircleIconOutline size={30} color={'#000'} />
          </Pressable>
        </View>
       : null }
       </View>
    </View>
    <Pressable style={{flexShrink: 0}} onPress={() => {
      if (CartStore.cart.has(product.id) && !isFavourite) {
        CartStore.removeFromCart(product.id)
      } else if (FavouriteStore.favourite.has(product.id)) {
        FavouriteStore.removeFromFavourite(product.id)
      }
    }}>
      <TrashIconOutline size={25} color={'#000'} />
    </Pressable>
  </View>
  </TouchableOpacity>
})

export default CartProduct