import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useProductDatabase } from "@/database/useProductDatabase";

export default function Details() {
  const [data, setData] = useState({
    produto: "",
    quantidade: 0,
  });

  const productDatabase = useProductDatabase();
  const params = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (params.id) {
      productDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            produto: response.produto,
            quantidade: response.quantidade,
          });
        }
      });
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
      {/* Ajustando a posição dos textos */}
      <Text style={{ fontSize: 40, marginTop: 20 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 40, marginTop: 10 }}>Quantidade: {data.quantidade}</Text>

      <Text style={{ fontSize: 40, marginTop: 10 }}>Produto: {data.produto}</Text>
    </View>
  );
}
