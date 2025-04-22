import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Integrante from "../Components/Integrante";

export default function IntegrantesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      <Integrante
        nome="Julio Cesar"
        rm="RM123456"
        sala="1TDSPF"
        imgSrc={require("../assets/julio.jpeg")}
        githubUrl="https://github.com/seuusuario"
        linkedinUrl="https://linkedin.com/in/seuusuario"
      />

      {/* Adicione mais integrantes se desejar */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 24,
  },
});
