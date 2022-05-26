import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Map from '../../components/Map';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';

import colors from '../../../assets/colors/color';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
export default function RequestVehicle({ navigation }) {
  const [fareValue, setFareValue] = useState('');

  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  });
  const confirmRideHandler = () => {
    navigation.navigate('Negotiation');
  };
  return (
    <View
      style={{
        height: '100%',
      }}>
      <Map />
      <Text style={styles.requestvehicle}>Request Vehicle</Text>
      <View style={styles.showOptions}>
        <Button
          title="Show Options"
          onPress={() => {
            refRBSheet.current.open();
          }}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={true}
        height={400}
        customStyles={styles.RBsheet}>
        <Text style={styles.selectVehicle}>Select Vehicle</Text>
        <View style={{ height: 85 }}>
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.vehicleContainer}>
              <TouchableOpacity
                style={[
                  styles.vehicleCard,
                  { backgroundColor: colors.yellow },
                ]}>
                <Image
                  source={require('../../../images/EcoCar.png')}
                  style={[styles.vehicleCardImg, styles.EcoImg]}></Image>
                <Text style={styles.vehicleCardText}>Eco</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vehicleCard}>
                <Image
                  source={require('../../../images/StandardCar.png')}
                  style={styles.vehicleCardImg}></Image>
                <Text style={styles.vehicleCardText}>Standard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vehicleCard}>
                <Image
                  source={require('../../../images/PremiumCar.png')}
                  style={styles.vehicleCardImg}></Image>
                <Text style={styles.vehicleCardText}>Premium</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vehicleCard}>
                <Image
                  source={require('../../../images/Bike.png')}
                  style={[styles.vehicleCardImg, styles.BikeImg]}></Image>
                <Text style={styles.vehicleCardText}>Bike</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vehicleCard}>
                <Image
                  source={require('../../../images/Auto.png')}
                  style={[styles.vehicleCardImg, styles.AutoImg]}></Image>
                <Text style={styles.vehicleCardText}>Auto</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.hr} />
        <Text style={styles.selectVehicle}>Choose your Fare</Text>
        <View style={{ paddingLeft: '5%' }}>
          <TextInput
            style={styles.fareInput}
            value={fareValue}
            placeholder="Enter Your Fare"
            placeholderTextColor="#9F9F9F"
            placeholderStyle={styles.placeholder}
            onChangeText={setFareValue}
            keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.hr} />
        <View style={styles.pickndropContainer}>
          <Image
            source={require('../../../images/pickupPointer.png')}
            style={styles.pointers}
          />
          <View style={styles.pickndropWrapper}>
            <View style={styles.pickupWrapper}>
              <Text style={styles.pickndropText}>Pickup</Text>
              <Text style={styles.location}>
                House B-267, Block 13D/1, Gulshan-e-Iqbal, Karachi
              </Text>
            </View>
            <View style={styles.DropoffWrapper}>
              <Text style={styles.pickndropText}>Dropoff</Text>
              <Text style={styles.location}>
                Aga Khan University Hospital Entrance 1
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ConfirmVehicle}>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={confirmRideHandler}>
            <Text style={styles.btnText}>Confirm Your Ride</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}
