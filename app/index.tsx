import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <StatusBar style="auto" />

      <Text>Você seguro</Text>

      <Button
        title="Denúncia anônima"
        onPress={() => router.push("/pages/(tabs)/home")}
      />

      <View>
        <TouchableOpacity onPress={() => router.push("/pages/help")}>
          <Text>Apoio e ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/pages/data")}>
          <Text>Dados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/pages/info")}>
          <Text>informações</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/pages/devs")}>
          <Text>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
