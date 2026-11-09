import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import ServiceGrid from './components/ServiceGrid';
import PromoBanner from './components/PromoBanner';
import MerchantsSection from './components/MerchantsSection';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#008F4C"
        barStyle="light-content"
      />

      <Header />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ServiceGrid />
        <PromoBanner />
        <MerchantsSection />

        <View style={styles.bottomSpace} />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  bottomSpace: {
    height: 20,
  },
});