import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AccountDropdown from '../components/AccountDropdown'; // Assuming you want to keep the dropdown

// Placeholder Icons (replace with your actual icon images in assets folder)
import HamburgerIcon from '../assets/hamburger_icon.png'; // You'll need to create/add these
import PersonIcon from '../assets/person_icon.png';     // You'll need to create/add these

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <Image source={HamburgerIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} /> {/* Spacer to push AccountIcon to the right */}
        <AccountDropdown navigation={navigation} /> {/* Keep AccountDropdown on the right */}
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={[styles.tile, styles.workoutTile]} onPress={() => navigation.navigate('Workout')}>
          <Text style={styles.tileText}>Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tile, styles.cardioTile]} onPress={() => navigation.navigate('Cardio')}>
          <Text style={styles.tileText}>Cardio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tile, styles.yogaTile]} onPress={() => navigation.navigate('Yoga')}>
          <Text style={styles.tileText}>Yoga</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tile, styles.dietTile]} onPress={() => navigation.navigate('Diet')}>
          <Text style={styles.tileText}>Diet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background as per image
    paddingTop: 50,         // Add paddingTop to push content below status bar
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align icons to left and right
    alignItems: 'center',
    marginBottom: 30, // Space between header and tiles
  },
  headerIcon: {
    padding: 10, // Padding around header icons if needed
  },
  icon: {
    width: 30,     // Adjust icon size as needed
    height: 30,    // Adjust icon size as needed
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Space between tiles
  },
  tile: {
    width: '48%', // Slightly less than 50% to create space between tiles
    aspectRatio: 1,
    borderRadius: 20, // Rounded corners for tiles
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Space between rows of tiles
    overflow: 'hidden', // To make sure rounded corners work with background color
  },
  workoutTile: {
    backgroundColor: '#FF5733', // Red/Orange - Adjust color as needed
  },
  cardioTile: {
    backgroundColor: '#3434A8', // Dark Blue/Purple - Adjust color as needed
  },
  yogaTile: {
    backgroundColor: '#24A0ED', // Light Blue/Green - Adjust color as needed
  },
  dietTile: {
    backgroundColor: '#A020F0', // Purple/Orange - Adjust color as needed
  },
  tileText: {
    color: 'white',      // White text color for tile names
    fontSize: 20,       // Adjust font size as needed
    fontWeight: 'bold', // Make text bold if needed
  },
});

export default HomeScreen;