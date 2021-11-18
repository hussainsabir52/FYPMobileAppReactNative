import React from 'react';
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
//import Button from '../../components/Button';

const Home = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.optionCard}>
        <Image
          source={require('../../../images/Ride.png')}
          style={styles.RideImg}></Image>
        <Text style={styles.RideTxt}>BOOK RIDE</Text>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard1}>
        <Image
          source={require('../../../images/Carpool.png')}
          style={styles.CarpoolImg}></Image>
        <Text style={styles.CarpoolTxt}>CARPOOLING</Text>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonWhiteText}>SHARE A RIDE</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard2}>
        <Image
          source={require('../../../images/Schedule.png')}
          style={styles.ScheduleImg}></Image>
        <Text style={styles.CarpoolTxt}>SCHEDULE RIDE</Text>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonWhiteText}>BOOK NOW</Text>
        </Pressable>
      </View>
      <View style={styles.optionCard3}>
        <Image
          source={require('../../../images/Delivery.png')}
          style={styles.DeliveryImg}></Image>
        <Text style={styles.CarpoolTxt}>DELIVERY</Text>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonWhiteText}>RIDE NOW</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
