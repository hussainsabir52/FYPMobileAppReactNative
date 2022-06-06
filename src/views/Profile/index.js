import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }) => {
  const logoutHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
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
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 30,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={logoutHandler}>
          <MaterialCommunityIcons
            name="exit-to-app"
            size={25}
            color="#FF0000"
            style={{
              transform: [{ rotateY: '180deg' }],
              paddingHorizontal: 10,
            }}
          />
          <Text style={[styles.text, styles.red]}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
