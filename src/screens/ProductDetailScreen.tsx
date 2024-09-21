import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { RootState } from "../store";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;

const ProductDetailScreen: React.FC<{
  route: ProductDetailScreenRouteProp;
}> = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    state.products.items.find(item => item.id === productId)
  );

  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes[0] || ""
  );

  if (!product)
    return <Text className="text-center mt-4">Ürün bulunamadı</Text>;

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-xl text-primary">Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text className="text-xl text-primary">Sepet</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: product.image }}
        className="w-full h-64 object-cover"
      />

      <View className="p-4">
        <Text className="text-2xl font-bold text-heading">{product.name}</Text>
        <Text className="text-xl text-primary mt-2">{product.price} TL</Text>
        <Text className="mt-4 text-text">{product.description}</Text>

        <View className="mt-4">
          <Text className="text-lg font-semibold text-heading">Renkler</Text>
          <View className="flex-row mt-2">
            {product.colors.map(color => (
              <TouchableOpacity
                key={color}
                className={`w-8 h-8 rounded-full mr-2 border-2 ${
                  selectedColor === color
                    ? "border-primary"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-lg font-semibold text-heading">Bedenler</Text>
          <View className="mt-2 flex-row">
            {product.sizes.map(size => (
              <TouchableOpacity
                key={size}
                className={`px-4 py-2 mr-2 rounded-lg border ${
                  selectedSize === size ? "border-primary" : "border-gray-300"
                }`}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  className={`text-lg ${
                    selectedSize === size ? "text-primary" : "text-text"
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          className="mt-6 bg-secondary py-3 px-6 rounded-full"
          onPress={() => dispatch(addToCart(product))}
        >
          <Text className="text-white text-center font-bold text-lg">
            Sepete Ekle
          </Text>
        </TouchableOpacity>

        <View className="mt-6">
          <Text className="text-xl font-semibold text-heading">
            Müşteri Yorumları
          </Text>
          {product.reviews.map((review, index) => (
            <View key={index} className="mt-4 bg-white p-4 rounded-lg">
              <Text className="text-lg font-semibold">{review.user}</Text>
              <Text className="text-sm text-gray-500">⭐ {review.rating}</Text>
              <Text className="mt-2 text-text">{review.comment}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
