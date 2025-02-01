import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import PersonIcon from '../assets/images/person_icon.png'; // Replace with your actual icon path

const AccountDropdown = ({ navigation }) => {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.iconContainer}>
          <Image source={PersonIcon} style={styles.icon} resizeMode="contain" />
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => navigation.navigate('UserProfile')} text="User Profile" />
        <MenuOption onSelect={() => navigation.navigate('FitnessProfile')} text="Fitness Profile" />
        <MenuOption onSelect={() => navigation.navigate('Subscriptions')} text="Subscriptions" />
        <MenuOption onSelect={() => navigation.navigate('Help')} text="Help" />
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default AccountDropdown;