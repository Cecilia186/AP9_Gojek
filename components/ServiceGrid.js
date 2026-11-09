import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ServiceGrid() {
  const services = [
    { id: 1, name: 'Go-Ride', emoji: '🏍️', color: '#E5F8EF' },
    { id: 2, name: 'Go-Food', emoji: '🍔', color: '#FFF0E5' },
    { id: 3, name: 'Go-Send', emoji: '📦', color: '#E8F1FF' },
    { id: 4, name: 'Go-Play', emoji: '🎮', color: '#F3E9FF' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Populer</Text>

      <View style={styles.grid}>
        {services.map((service) => (
          <Pressable key={service.id} style={styles.card}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: service.color },
              ]}
            >
              <Text style={styles.emoji}>{service.emoji}</Text>
            </View>

            <Text style={styles.serviceName}>{service.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  emoji: {
    fontSize: 30,
  },

  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
});