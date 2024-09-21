import React from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";

interface FilterModalProps {
  visible: boolean;
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  categories,
  selectedCategory,
  onSelectCategory,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
        <View className="bg-white rounded-lg w-4/5 p-4">
          <Text className="text-xl font-bold mb-4">Kategorileri Filtrele</Text>
          <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="py-2"
                onPress={() => onSelectCategory(item)}
              >
                <Text
                  className={`text-lg ${
                    selectedCategory === item ? "text-primary" : "text-text"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            className="mt-4 bg-accent py-2 rounded"
            onPress={onClose}
          >
            <Text className="text-white text-center text-lg">Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
