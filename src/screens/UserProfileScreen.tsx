import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserProfileScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-heading mb-4">
        Kullanıcı Profili
      </Text>
      <Text className="text-lg text-text">Ad: {user.name}</Text>
      <Text className="text-lg text-text">Email: {user.email}</Text>

      <TouchableOpacity className="mt-4 bg-primary py-3 rounded-lg">
        <Text className="text-white text-center text-lg font-semibold">
          Favoriler
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;
