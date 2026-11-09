import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MerchantsSection() {
  const merchants = [
    {
      id: 1,
      name: 'Kopi Kenangan',
      emoji: '☕',
      rating: '4.9',
      distance: '0.5 km',
    },
    {
      id: 2,
      name: 'McDonald’s',
      emoji: '🍔',
      rating: '4.8',
      distance: '0.8 km',
    },
    {
      id: 3,
      name: 'Roti Bakar',
      emoji: '🍞',
      rating: '4.7',
      distance: '1.2 km',
    },
    {
      id: 4,
      name: 'Pizza House',
      emoji: '🍕',
      rating: '4.9',
      distance: '1.5 km',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restoran Terdekat</Text>
      <Text style={styles.subtitle}>Pilihan favorit di sekitarmu</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {merchants.map((merchant) => (
          <View key={merchant.id} style={styles.card}>
            <View style={styles.imageContainer}>
              <Text style={styles.emoji}>{merchant.emoji}</Text>
            </View>

            <Text style={styles.name}>{merchant.name}</Text>

            <View style={styles.info}>
              <Text style={styles.rating}>⭐ {merchant.rating}</Text>
              <Text style={styles.distance}>{merchant.distance}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
    marginTop: 4,
    marginBottom: 14,
  },

  card: {
    width: 145,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  imageContainer: {
    height: 90,
    backgroundColor: '#E5F8EF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  emoji: {
    fontSize: 42,
  },

  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rating: {
    fontSize: 11,
    color: '#555555',
  },

  distance: {
    fontSize: 10,
    color: '#888888',
  },
});