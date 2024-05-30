import React, { FC } from "react";
import { ArrowLeftIcon as ArrowLeftIconSolid } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeBtn:FC = () => {
  const navigate = useNavigation()

  const onPress = (name: String) => {
    // @ts-ignore
    navigate.navigate(name)
  }
  return <TouchableOpacity style={{width: 25, height: 25}}  activeOpacity={1} onPress={() => onPress("Products")}>
    <ArrowLeftIconSolid size={25} fill={'#000'} />
  </TouchableOpacity>
}

export default HomeBtn