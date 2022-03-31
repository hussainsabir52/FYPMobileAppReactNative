import React, { useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Map from '../../components/Map';
import Button from '../../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import RNLocation from 'react-native-location';

const Home = ({ navigation }) => {

  const rideHandler = () => {
    navigation.navigate('Dropoff')
  }

  useEffect(() => {
    console.log("use HELLO")
    async function getLocation (){
      const status= await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse' // or 'fine'
        }
      });
  
      if(!status){
        RNLocation.requestPermission({
          ios: 'whenInUse', // or 'always'
          android: {
            detail: 'coarse', // or 'fine'
            rationale: {
              title: "We need to access your location",
              message: "We use your location to show where you are on the map",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        });
       
      }
      console.log("HELLO");
      
    }
    getLocation();
  })

  return (
    <ScrollView style={styles.scroll}>

      <View style={styles.optionCard}>
        
        <Image
          source={require('../../../images/Ride.webp')}
          style={styles.OptImg}></Image>
        <Text style={styles.OptTxt}>BOOK RIDE</Text>
        <Pressable style={styles.primaryButton} onPress={rideHandler}>
          <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard1}>
        <Image
          source={require('../../../images/Carpool.webp')}
          style={styles.OptImg}></Image>
        <Text style={styles.OptTxt}>CARPOOLING</Text>
        <Pressable style={styles.primaryButton} onPress={rideHandler}>
          <Text style={styles.buttonWhiteText}>SHARE A RIDE</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard2}>
        <Image
          source={require('../../../images/Schedule.webp')}
          style={styles.OptImg}></Image>
        <Text style={styles.OptTxt}>SCHEDULE RIDE</Text>
        <Pressable style={styles.primaryButton} onPress={rideHandler}>
          <Text style={styles.buttonWhiteText}>BOOK NOW</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard3}>
        <Image
          source={require('../../../images/Delivery.webp')}
          style={styles.OptImg}></Image>
        <Text style={styles.OptTxt}>DELIVERY</Text>
        <Pressable style={styles.primaryButton} onPress={rideHandler}>
          <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
