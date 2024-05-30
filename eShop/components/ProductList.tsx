import React, { useState } from "react";
import { Alert, FlatList, RefreshControl, View } from "react-native";
import Loading from "./Loading";
import { observer } from "mobx-react-lite";
import ProductStore from "../store/ProductStore";
import ProductItem from "./ProductItem";
import { Product } from "../types";
// @ts-ignore
import styled from "styled-components/native";


const ProductList = observer(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<Product[] | []>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const data: Product[] = Object.assign([],ProductStore.products)
        setItems(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить пользователей')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  if (isLoading) return <Loading />

  return <MainView>
    <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <ProductItem product={item} />} />
  </MainView>
})

const MainView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 10px 0;
  flex: 1;
  background: white;
`

export default ProductList