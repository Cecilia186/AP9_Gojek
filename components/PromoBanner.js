import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PromoBanner() {
  const promos = [
    {
      id: 1,
      emoji: '🎉',
      title: 'Diskon 50%',
      subtitle: 'Nikmati perjalanan lebih hemat!',
      color: '#00AA5B',
    },
    {
      id: 2,
      emoji: '🍔',
      title: 'Promo GoFood',
      subtitle: 'Makanan favorit lebih murah!',
      color: '#FF8A3D',
    },
    {
      id: 3,
      emoji: '🚚',
      title: 'Gratis Ongkir',
      subtitle: 'Kirim paket tanpa biaya kirim!',
      color: '#4776E6',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promo Menarik</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {promos.map((promo) => (
          <View
            key={promo.id}
            style={[styles.banner, { backgroundColor: promo.color }]}
          >
            <View style={styles.bannerContent}>
              <Text style={styles.emoji}>{promo.emoji}</Text>

              <Text style={styles.promoTitle}>
                {promo.title}
              </Text>

              <Text style={styles.subtitle}>
                {promo.subtitle}
              </Text>
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
    marginBottom: 14,
  },

  banner: {
    width: 260,
    height: 130,
    borderRadius: 16,
    marginRight: 12,
    padding: 16,
    justifyContent: 'center',
  },

  bannerContent: {
    flex: 1,
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 30,
    marginBottom: 6,
  },

  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});