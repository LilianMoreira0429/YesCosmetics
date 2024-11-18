import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
  data: {
    name: string;
    quantity: number;
  };
  onDelete: () => void;
  onOpen: () => void;
};

export function Product({ data, onDelete, onOpen, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
      }}
      {...rest}
    >
      {/* Aumentando o tamanho da letra */}
      <Text style={{ flex: 1, fontSize: 18 }}>
        {data.quantity} - {data.name}
      </Text>

      {/* Ícone de deletar */}
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>

      {/* Ícone de visualização */}
      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons name="visibility" size={24} color="blue" />
      </TouchableOpacity>
    </Pressable>
  );
}
