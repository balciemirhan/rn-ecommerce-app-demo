import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onFilterPress,
}) => {
  return (
    <View className="flex-row items-center bg-white rounded-lg p-2 mb-4">
      <Ionicons name="search" size={20} color="gray" />
      <TextInput
        className="flex-1 ml-2"
        placeholder="Ürün ara..."
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Ionicons name="filter" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
