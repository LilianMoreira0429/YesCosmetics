import { useEffect, useState } from "react";
import { View, Button, Text, Alert, FlatList, ImageBackground, ScrollView } from "react-native";
import { router } from "expo-router";

import { Input } from "@/components/Input";
import { Product } from "@/components/Product";

import {
  useProductDatabase,
  ProductDatabase,
} from "@/database/useProductDatabase";

export default function Index() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductDatabase[]>([]);

  const productDatabase = useProductDatabase();

  async function create() {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert("Quantidade", "A quantidade precisa ser um número!");
      }

      const response = await productDatabase.create({
        name,
        quantity: Number(quantity),
      });

      Alert.alert("Produto cadastrado com o ID: " + response.insertedRowId);
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert("Quantidade", "A quantidade precisa ser um número!");
      }

      await productDatabase.update({
        id: Number(id),
        name,
        quantity: Number(quantity),
      });

      Alert.alert("Produto atualizado!");
    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      const response = await productDatabase.searchByName(search);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function remove(id: number) {
    try {
      await productDatabase.remove(id);
      await list();
    } catch (error) {
      console.log(error);
    }
  }

  function details(item: ProductDatabase) {
    setId(String(item.id));
    setName(item.name);
    setQuantity(String(item.quantity));
  }

  async function handleSave() {
    if (id) {
      update();
    } else {
      create();
    }

    setId("");
    setName("");
    setQuantity("");
    await list();
  }

  useEffect(() => {
    list();
  }, [search]);

  return (
    <ImageBackground
      source={{
        uri: "https://1.bp.blogspot.com/-dTJ0nerUoOA/YEjXeqrhwdI/AAAAAAACVTQ/11GVq_4f0VMuzh1uGK3Jzy7t2Rqv_wmzQCLcBGAsYHQ/s576/logo.png",
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, padding: 16 }}>
        {/* Seção do Cabeçalho */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
              textAlign: "center",
              color: "#32CD32",
            }}
          >
            Yes Cosmetics
          </Text>
        </View>

        {/* Seção do Formulário */}
        <View style={{ flex: 0, paddingBottom: 20 }}>
          <Input
            placeholder="Produtos"
            onChangeText={setName}
            value={name}
            placeholderTextColor="#4682B4"
            style={{
              borderWidth: 1,
              borderColor: "#D3D3D3",
              fontSize: 30,
              color: "#32CD32",
              marginBottom: 15,
            }}
          />
          <Input
            placeholder="Quantidade"
            onChangeText={setQuantity}
            value={quantity}
            placeholderTextColor="#4682B4"
            style={{
              borderWidth: 1,
              borderColor: "#D3D3D3",
              fontSize: 30,
              color: "#32CD32",
              marginBottom: 15,
            }}
          />

          <Button title="Salvar" onPress={handleSave} />
        </View>

        {/* Lista de Produtos */}
        <View style={{ flex: 1, marginTop: 20 }}>
          <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Product
                data={item}
                onPress={() => details(item)}
                onDelete={() => remove(item.id)}
                onOpen={() => router.push(`/details/${item.id}`)}
              />
            )}
            contentContainerStyle={{
              gap: 16,
              paddingBottom: 20,
            }}
            style={{
              backgroundColor: "#F0F8FF",
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
