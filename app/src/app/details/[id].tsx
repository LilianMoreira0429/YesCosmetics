import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useProductDatabase } from "@/database/useProductDatabase";

export default function Details() {
  const [data, setData] = useState({
    name: "",
    quantity: 0,
  });

  const productDatabase = useProductDatabase();
  const params = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      productDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            name: response.name,
            quantity: response.quantity,
          });
        }
      });
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
      {/* Ajustando a posição dos textos */}
      <Text style={{ fontSize: 30, marginTop: 20 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 30, marginTop: 10 }}>Quantidade: {data.quantity}</Text>

      <Text style={{ fontSize: 30, marginTop: 10 }}>Produto: {data.name}</Text>
    </View>
  );
}
