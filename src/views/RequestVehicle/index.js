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
export default function RequestVehicle() {
  const [fareValue, setFareValue] = useState('');

  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  });

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
              <TouchableOpacity style={styles.vehicleCard}>
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
        <View style={styles.ConfirmVehicle}>
          <Button
            title="Confirm Vehicle"
            style={styles.btnConfirm}
            disabled={false}
            color="#FEDB29"
          />
        </View>
      </RBSheet>
    </View>
  );
}
