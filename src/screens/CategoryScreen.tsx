import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  const products = useSelector((state: RootState) => state.products.items);

  const filteredProducts = products.filter(
    product => product.category === category
  );

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-heading mb-4">
        {category} Kategorisi
      </Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetail", { productId: item.id })
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryScreen;
