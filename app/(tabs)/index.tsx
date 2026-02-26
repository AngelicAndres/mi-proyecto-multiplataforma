import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
  const isWeb = Platform.OS === 'web';

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.card, isWeb && styles.webCard]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        
        <Text style={styles.title}>Proyecto Multiplataforma</Text>
        <Text style={styles.subtitle}>Desplegado con Expo + VSC</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📍 Entorno: {Platform.OS.toUpperCase()}</Text>
          <Text style={styles.infoText}>✅ Estado: Funcionando</Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => alert('¡Interacción validada!')}
        >
          <Text style={styles.buttonText}>Probar Interfaz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    width: '90%',
    alignItems: 'center',
    // Sombra para iOS/Android
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  webCard: {
    maxWidth: 400, // En web la tarjeta no se estira infinitamente
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4630EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#4630EB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});