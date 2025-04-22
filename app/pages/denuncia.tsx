import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DenunciaPage() {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarDenuncia = () => {
    if (!tipo || !descricao) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    setMensagem('Sua denúncia foi enviada com sucesso!');
    setTipo('');
    setDescricao('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Denúncia</Text>
      <Text style={styles.texto}>
        Nesta página você pode registrar sua denúncia. Selecione o tipo e descreva o ocorrido de forma anônima.
      </Text>

      <Text style={styles.label}>Tipo de denúncia:</Text>
      <Picker
        selectedValue={tipo}
        onValueChange={itemValue => setTipo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Violência Doméstica" value="violencia" />
        <Picker.Item label="Racismo" value="racismo" />
        <Picker.Item label="Abuso infantil" value="abuso" />
        <Picker.Item label="Assédio" value="assedio" />
      </Picker>

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Descreva o que aconteceu..."
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={enviarDenuncia}>
        <Text style={styles.buttonText}>Enviar denúncia</Text>
      </TouchableOpacity>

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 80, backgroundColor: '#C9C8C8'},
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 50, color: '#0A3CFF' },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  picker: { backgroundColor: '#DBD7D7', marginBottom: 20 },
  textarea: {
    backgroundColor: '#DBD7D7',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0A3CFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
  mensagem: {
    marginTop: 20,
    color: '#333232',
    fontSize: 16,
    textAlign: 'center',
  },
});
