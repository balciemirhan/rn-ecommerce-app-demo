import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md mb-4"
      onPress={onPress}
    >
      <Image
        source={{ uri: product.image }}
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <View className="p-4">
        <Text className="text-lg font-semibold text-heading">
          {product.name}
        </Text>
        <Text className="text-primary text-xl mt-2">{product.price} TL</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
