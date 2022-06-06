import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '../Summary/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Summary = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              color="#000000"
              size={20}
              style={styles.chevronLeft}></AntDesign>
          </TouchableOpacity>
          <Text style={styles.headerText}>Monthly Booking Confirmation</Text>
        </View>

        <View style={styles.Contractdetails}>
          <Text style={styles.LocationHeading}>Monthly Contract</Text>
          <View style={styles.dates}>
            <Entypo
              name="calendar"
              size={20}
              color="#858585"
              style={styles.calendarIcon}></Entypo>
            {/* Start DATE END DATE YAHAN LAGADO */}
            <Text style={styles.greyText}>27 Jan - 27 Feb</Text>
          </View>
          <View style={styles.DaysOfWeek}>
            <MaterialCommunityIcons
              name="view-week"
              size={20}
              color="#858585"
              style={styles.calendarIcon}
            />
            {/* DAYS OF WEEK YAHAN DAAL  */}
            <Text style={styles.greyText}>M, Tu, W, Th, Fr, Sa, So</Text>
          </View>
        </View>
        <View style={styles.LocationsWrapper}>
          <Text style={styles.LocationHeading}>Location</Text>
          <View style={styles.pickup}>
            <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
              Block 13D/1, Gulshan-e-Iqbal
            </Text>
          </View>
          <AntDesign
            name="arrowdown"
            color="#ABABAB"
            size={30}
            style={styles.arrowdown}></AntDesign>
          <View style={styles.dropoff}>
            <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
              Manzil Pump
            </Text>
          </View>
          <View style={styles.pickupTime}>
            <Feather
              name="clock"
              size={20}
              color="#858585"
              style={styles.calendarIcon}
            />
            {/* PICKUP TIME YAHAN DAAL  */}
            <Text style={styles.greyText}>Pickup Time: 07:00</Text>
          </View>
        </View>
        <View style={styles.FareWrapper}>
          <Text style={styles.LocationHeading}>Choose Your Fare</Text>
          <View style={styles.recommendedFare}>
            <Text style={styles.NormalText}>Enter Your Fare</Text>
            <TextInput
              placeholder=" PKR "
              placeholderTextColor="#000000"
              keyboardType="number-pad"
              style={styles.FareInput}></TextInput>
          </View>
        </View>

        <View style={styles.btnConfirmWrapper}>
          <TouchableOpacity style={styles.btnConfirm}>
            <Text style={styles.btnText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Summary;
