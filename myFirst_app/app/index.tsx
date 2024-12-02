import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Header from './Header';

const Footer = () => {
  return (
    <View style={{flex:1}}>
      <Header></Header>

<View style={styles.footer}>
      

      <View style={styles.footerItem}>
        <MaterialIcons name="category" size={24} color="black" />
        <Link href={"/Category"} style={styles.link}>Category</Link>
      </View>

      <View style={styles.footerItem}>
        <MaterialIcons name="production-quantity-limits" size={24} color="black" />
        <Link href={"/Products"} style={styles.link}>Products</Link>
      </View>

      <View style={styles.footerItem}>
        <AntDesign name="home" size={24} color="black" />
        <Link href={"/Home"} style={styles.link}>Home</Link>
      </View>

      <View style={styles.footerItem}>
        <AntDesign name="profile" size={24} color="black" />
        <Link href={"/Profile"} style={styles.link}>Profile</Link>
      </View>
    </View>
    </View>
    

    
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  title: {
    color: 'red',
    fontSize: 16,
    position: 'absolute',
    top: -20,
    textAlign: 'center',
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  link: {
    marginTop: 5,
    color: 'black',
    textDecorationLine: 'none',
  },
});

export default Footer;
