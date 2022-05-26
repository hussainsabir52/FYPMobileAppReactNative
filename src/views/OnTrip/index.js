import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Map from '../../components/Map';

const OnTrip = ({ navigation }) => {
  const feedbackHandler = () => {
    navigation.navigate('Feedback');
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>On Trip</Text>
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.driverImageContainer}>
        <View style={styles.driverImageWrapper}>
          <Image
            style={styles.driverImage}
            source={require('../../../images/author-3.jpg')}></Image>
        </View>
      </View>
      <View style={styles.driverContainer}>
        <View style={styles.driverDetails}>
          <View style={styles.driverName}>
            <Text style={styles.NameText}>Muhammad Asif</Text>
          </View>
          <View style={styles.driverRatingWrapper}>
            <Image
              style={styles.driverRating}
              source={require('../../../images/rating.png')}></Image>
          </View>
        </View>
        <View style={styles.vehicleDetails}>
          <Text style={styles.vehicleno}>HS785K</Text>
          <Text style={styles.vehicleName}>White Honda Civic X</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.RateButton} onPress={feedbackHandler}>
          <Text style={styles.ContactButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnTrip;
