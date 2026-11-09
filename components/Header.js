import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Selamat Pagi, Cecilia!</Text>
          <Text style={styles.location}>📍 Jakarta Pusat</Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👩🏻</Text>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>
          Cari layanan atau makanan favoritmu
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00AA5B',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 24,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  greetingContainer: {
    flex: 1,
  },

  greeting: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  location: {
    fontSize: 13,
    color: '#E8FFF2',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 27,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchText: {
    fontSize: 13,
    color: '#888888',
  },
});