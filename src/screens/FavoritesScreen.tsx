import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductCard from "../components/ProductCard";

const FavoritesScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const products = useSelector((state: RootState) => state.products.items);

  const favoriteProducts = products.filter(product =>
    user.favorites.includes(product.id)
  );

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-heading mb-4">Favoriler</Text>

      {favoriteProducts.length === 0 ? (
        <Text className="text-center text-lg text-text mt-20">
          Favori ürününüz yok.
        </Text>
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => {}} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
