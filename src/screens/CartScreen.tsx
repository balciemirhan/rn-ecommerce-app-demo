import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../store/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = total > 500 ? total * 0.1 : 0; // Örneğin, 500 TL üzeri alışverişlerde %10 indirim
  const finalTotal = total - discount;

  return (
    <View className="flex-1 bg-background p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-xl text-primary">Geri</Text>
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-heading">Sepet</Text>
        <View style={{ width: 50 }} /> {/* Boşluk doldurmak için */}
      </View>

      {cartItems.length === 0 ? (
        <Text className="text-center text-lg text-text mt-20">
          Sepetiniz boş.
        </Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-row items-center mb-4 bg-white rounded-lg p-2">
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold text-heading">
                  {item.name}
                </Text>
                <Text className="text-primary text-lg">{item.price} TL</Text>
                <View className="flex-row items-center mt-2">
                  <TouchableOpacity
                    className="bg-gray-300 rounded-full w-6 h-6 justify-center items-center"
                    onPress={() => {
                      if (item.quantity > 1) {
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        );
                      }
                    }}
                  >
                    <Text className="text-lg">-</Text>
                  </TouchableOpacity>
                  <Text className="mx-2 text-lg">{item.quantity}</Text>
                  <TouchableOpacity
                    className="bg-gray-300 rounded-full w-6 h-6 justify-center items-center"
                    onPress={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Text className="text-lg">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Text className="text-red-500 text-xl">🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300">
          <View className="flex-row justify-between mb-2">
            <Text className="text-lg text-text">Toplam:</Text>
            <Text className="text-lg text-text">{total.toFixed(2)} TL</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-lg text-text">İndirim:</Text>
            <Text className="text-lg text-red-500">
              -{discount.toFixed(2)} TL
            </Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-xl font-bold text-heading">
              Genel Toplam:
            </Text>
            <Text className="text-xl font-bold text-heading">
              {finalTotal.toFixed(2)} TL
            </Text>
          </View>
          <TouchableOpacity
            className="bg-primary py-3 rounded-lg"
            onPress={() => {
              dispatch(clearCart());
              alert("Ödeme başarılı!");
              navigation.navigate("Home");
            }}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Ödemeyi Yap
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
