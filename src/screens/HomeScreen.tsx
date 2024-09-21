import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterModal from "../components/FilterModal";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const products = useSelector((state: RootState) => state.products.items);
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <View className="flex-1 bg-background p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold text-heading">E-Ticaret</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text className="text-xl text-primary">Sepet</Text>
        </TouchableOpacity>
      </View>

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={() => setFilterVisible(true)}
      />

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

      <FilterModal
        visible={isFilterVisible}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={category => {
          setSelectedCategory(category);
          setFilterVisible(false);
        }}
        onClose={() => setFilterVisible(false)}
      />
    </View>
  );
};

export default HomeScreen;
