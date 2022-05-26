import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Pressable,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Map from '../../components/Map';
import Button from '../../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import RNLocation from 'react-native-location';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../../../assets/colors/color';

const Home = ({ navigation }) => {
  const rideHandler = () => {
    navigation.navigate('Dropoff');
  };
  const deliveryHandler = () => {
    navigation.navigate('Delivery');
  };
  const monthlyContractHandler = () => {
    navigation.navigate('DatePick');
  };

  useEffect(() => {
    console.log('use HELLO');
    async function getLocation() {
      const status = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse', // or 'fine'
        },
      });

      if (!status) {
        RNLocation.requestPermission({
          ios: 'whenInUse', // or 'always'
          android: {
            detail: 'coarse', // or 'fine'
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
      }
      console.log('HELLO');
    }
    getLocation();
  });
  Feather.loadFont();
  return (
    //NEW UI

    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={colors.yellow}
        barStyle={'dark-content'}></StatusBar>
      <View style={styles.header}>
        <Feather
          name="menu"
          size={23}
          color={colors.black}
          style={styles.menuicon}
        />
        <View style={styles.nameWrapper}>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.username}>Muhammad Hasan</Text>
        </View>
        <Image
          source={require('../../../images/user.jpg')}
          style={styles.userProfile}></Image>
      </View>
      <View>
        <Pressable onPress={rideHandler}>
          <View style={[styles.whereTO, styles.searchbar]}>
            <Text
              style={{
                color: '#8D8D8D',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Where to?
            </Text>
            {/* <TextInput
            placeholder="Where to?"
            placeholderTextColor="#8D8D8D"
            style={styles.searchbar}></TextInput> */}
          </View>
        </Pressable>
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Pressable onPress={rideHandler} style={styles.card}>
            <Image
              source={require('../../../images/gaari.png')}
              style={styles.carImage}
            />
            <Text style={styles.cardText}>RIDE</Text>
          </Pressable>
          <Pressable onPress={rideHandler} style={styles.card}>
            <Image
              source={require('../../../images/carpooling.png')}
              style={styles.carImage}
            />
            <Text style={styles.cardText}>CARPOOLING</Text>
          </Pressable>
        </View>
        <View style={styles.cardWrapper}>
          <Pressable onPress={monthlyContractHandler} style={styles.card3}>
            <View style={styles.row}>
              <Image
                source={require('../../../images/gaari.png')}
                style={[styles.carImage, { height: 40, width: 90 }]}
              />
              <Image
                source={require('../../../images/calendar.png')}
                style={styles.calendarImage}
              />
            </View>
            <Text style={[styles.cardText, { fontSize: 13 }]}>
              MONTHLY CONTRACT
            </Text>
            <Text style={[styles.cardText, { fontSize: 13, marginTop: -10 }]}>
              BOOKING
            </Text>
          </Pressable>
          <Pressable onPress={deliveryHandler} style={styles.card}>
            <Image
              source={require('../../../images/packages.png')}
              style={styles.carImage}
            />
            <Text style={styles.cardText}>DELIVERY</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>

    // OlD UI
    // <ScrollView style={styles.scroll}>
    //   <View style={styles.optionCard}>
    //     <Image
    //       source={require('../../../images/Ride.webp')}
    //       style={styles.OptImg}></Image>
    //     <Text style={styles.OptTxt}>BOOK RIDE</Text>
    //     <Pressable style={styles.primaryButton} onPress={rideHandler}>
    //       <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
    //     </Pressable>
    //   </View>
    //   <View style={styles.optionCard1}>
    //     <Image
    //       source={require('../../../images/Carpool.webp')}
    //       style={styles.OptImg}></Image>
    //     <Text style={styles.OptTxt}>CARPOOLING</Text>
    //     <Pressable style={styles.primaryButton} onPress={rideHandler}>
    //       <Text style={styles.buttonWhiteText}>SHARE A RIDE</Text>
    //     </Pressable>
    //   </View>
    //   <View style={styles.optionCard2}>
    //     <Image
    //       source={require('../../../images/Schedule.webp')}
    //       style={styles.OptImg}></Image>
    //     <Text style={styles.OptTxt}>SCHEDULE RIDE</Text>
    //     <Pressable style={styles.primaryButton} onPress={rideHandler}>
    //       <Text style={styles.buttonWhiteText}>BOOK NOW</Text>
    //     </Pressable>
    //   </View>
    //   <View style={styles.optionCard3}>
    //     <Image
    //       source={require('../../../images/Delivery.webp')}
    //       style={styles.OptImg}></Image>
    //     <Text style={styles.OptTxt}>DELIVERY</Text>
    //     <Pressable style={styles.primaryButton} onPress={rideHandler}>
    //       <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
    //     </Pressable>
    //   </View>
    // </ScrollView>
  );
};

export default Home;
