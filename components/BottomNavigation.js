import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function BottomNavigation() {
  const navItems = [
    { id: 1, icon: '🏠', label: 'Home' },
    { id: 2, icon: '📊', label: 'Activity' },
    { id: 3, icon: '💬', label: 'Inbox' },
    { id: 4, icon: '👤', label: 'Account' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <Pressable key={item.id} style={styles.navItem}>
          <Text style={styles.icon}>{item.icon}</Text>
          <Text
            style={[
              styles.label,
              item.label === 'Home' && styles.activeLabel,
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    elevation: 8,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },

  icon: {
    fontSize: 22,
    marginBottom: 4,
  },

  label: {
    fontSize: 11,
    color: '#999999',
  },

  activeLabel: {
    color: '#00AA5B',
    fontWeight: 'bold',
  },
});