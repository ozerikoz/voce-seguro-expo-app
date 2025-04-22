import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

type IntegranteProps = {
  nome: string;
  rm: string;
  sala: string;
  imgSrc: any;
  githubUrl: string;
  linkedinUrl: string;
};

export default function Integrante({
  nome,
  rm,
  sala,
  imgSrc,
  githubUrl,
  linkedinUrl,
}: IntegranteProps) {
  const abrirLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <View style={styles.container}>
      <Image source={imgSrc} style={styles.foto} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.rm}>RM: {rm}</Text>
      <Text style={styles.sala}>{sala}</Text>

      <View style={styles.social}>
        <TouchableOpacity onPress={() => abrirLink(githubUrl)} style={styles.socialItem}>
          <Image source={require("../../assets/github.svg")} style={styles.icon} />
          <Text style={styles.linkText}>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => abrirLink(linkedinUrl)} style={styles.socialItem}>
          <Image source={require("../../assets/linkedin.svg")} style={styles.icon} />
          <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rm: {
    fontSize: 14,
  },
  sala: {
    fontSize: 14,
    marginBottom: 8,
  },
  social: {
    flexDirection: "row",
    marginTop: 10,
  },
  socialItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  linkText: {
    fontSize: 14,
    color: "#007AFF",
  },
});
