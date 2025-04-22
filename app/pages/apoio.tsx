import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import TelefoneBox from '../Components/TelefoneBox';

export default function Apoio() {
  const ongs = [
    {
      nome: 'Instituto Maria da Penha',
      link: 'https://www.institutomariadapenha.org.br',
    },
    {
      nome: 'Tamo Juntas',
      link: 'https://tamojuntas.org.br',
    },
    {
      nome: 'Promundo',
      link: 'https://promundo.org.br',
    },
    {
      nome: 'Mães Pela Diversidade',
      link: 'https://www.instagram.com/maespeladiversidade/',
    },
    {
      nome: 'Instituto Patrícia Galvão',
      link: 'https://www.patriciagalvao.org.br',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Apoio e Ajuda</Text>

      <Text style={styles.subtitulo}>
        Aqui está uma lista de diferentes ONGs e importantes números disponíveis para ligação que podem ajudar você e que podem oferecer suporte em momentos difíceis. Não hesite em buscar ajuda!
      </Text>

      <Text style={styles.subtitulo2}>Lista de ONGs</Text>

      <View style={styles.ongsContainer}>
        {ongs.map((ong, index) => (
          <View key={index} style={styles.ongBox}>
            <Text style={styles.ongNome}>{ong.nome}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(ong.link)}>
              <Text style={styles.link}>Acessar site</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.subtitulo2}>Telefones úteis</Text>

      <View style={styles.telefonesContainer}>
      <View style={styles.telefoneBox}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:188')}>
            <Text style={styles.telefone}>Disque 188</Text>
            <Text style={styles.desc}>Centro de valorização da vida</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.telefoneBox}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:180')}>
            <Text style={styles.telefone}>Disque 180</Text>
            <Text style={styles.desc}>Violência contra a mulher</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.telefoneBox}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:190')}>
            <Text style={styles.telefone}>Disque 190</Text>
            <Text style={styles.desc}>Polícia Militar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.telefoneBox}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:188')}>
            <Text style={styles.telefone}>Disque 100</Text>
            <Text style={styles.desc}>Direitos Humanos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  subtitulo: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  subtitulo2: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  ongsContainer: {
    width: '90%',
    alignItems: 'center',
  },
  ongBox: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  ongNome: {
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    color: 'blue',
    marginTop: 4,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  telefonesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
  },
  telefoneBox: {
    alignItems: 'center',
    marginHorizontal: 0,
  },
  telefone: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
});
