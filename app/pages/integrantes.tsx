import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Integrante from "../Components/Integrante";

export default function IntegrantesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desenvolvedores</Text>

      <Integrante
        nome="Julio Cesar"
        rm="RM557298"
        sala="2TDSPF"
        imgSrc={require("../../assets/julio.jpg")}
        githubUrl="https://github.com/Julio-CRodrigues"
        linkedinUrl="https://www.linkedin.com/in/julio-cesar-rodrigues29/"
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
