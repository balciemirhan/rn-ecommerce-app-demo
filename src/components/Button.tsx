import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary" | "accent";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = "primary",
  disabled = false,
  loading = false,
}) => {
  const bgColor =
    type === "primary"
      ? "bg-primary"
      : type === "secondary"
      ? "bg-secondary"
      : "bg-accent";
  const textColor = "text-white";

  return (
    <TouchableOpacity
      className={`${bgColor} ${
        disabled ? "opacity-50" : ""
      } py-3 px-6 rounded-full`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={`${textColor} text-center font-bold text-lg`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
