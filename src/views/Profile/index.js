import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            color="#000000"
            size={20}
            style={styles.chevronLeft}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View>
        <Image
          source={require('../../../images/user-profile.png')}
          style={styles.userProfile}></Image>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Full Name: </Text>
        <Text style={[styles.text, styles.userdata]}>Muhammad Hasan</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Email: </Text>
        <Text style={[styles.text, styles.userdata]}>mhasanbvs@gmail.com</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Contact No: </Text>
        <Text style={[styles.text, styles.userdata]}>0300-000000</Text>
      </View>
    </View>
  );
};

export default Profile;
