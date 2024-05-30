import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const FavouriteBtn: FC = () => {
  const navigation = useNavigation()

  const onPress = (name: String) => {

    // @ts-ignore
    navigation.navigate(name)
  }

  return  <TouchableOpacity style={{width: 25, height: 25}}  activeOpacity={1} onPress={() => onPress("Favourite")}>
    <HeartIconSolid size={25} fill={'#000'} />
  </TouchableOpacity>
}

export default FavouriteBtn