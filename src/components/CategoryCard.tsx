import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  category: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg shadow-md mb-4 p-4"
      onPress={onPress}
    >
      <Text className="text-lg font-semibold text-heading">{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
