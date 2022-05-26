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
import Feather from 'react-native-vector-icons/Feather';

const Arriving = ({ navigation }) => {
  const [ContactDriverModalVisible, setContactDriverModalVisible] =
    useState(false);
  const [RideCancelModal, setRideCancelModal] = useState(false);
  const RideCancelHandler = () => {
    navigation.navigate('RequestVehicle');
  };
  const RatingHandler = () => {
    navigation.navigate('OnTrip');
  };
  return (
    <View style={styles.conatiner}>
      <Modal animationType="fade" visible={RideCancelModal} transparent>
        <View style={styles.CancelmodalBackground}>
          <View style={styles.Cancelmodalcontainer}>
            <Text style={[styles.text, { marginHorizontal: 10, fontSize: 15 }]}>
              Are you sure you want to cancel ride?
            </Text>
            <View style={styles.cancelbtns}>
              <TouchableOpacity
                style={styles.cancelbtn}
                onPress={RideCancelHandler}>
                <Text style={styles.text}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelbtn}
                onPress={() => setRideCancelModal(!RideCancelModal)}>
                <Text style={styles.text}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        visible={ContactDriverModalVisible}
        transparent
        onRequestClose={() => {
          setContactDriverModalVisible(!ContactDriverModalVisible);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalcontainer}>
            <View style={styles.carTop}>
              <Image
                source={require('../../../images/car_top.png')}
                style={styles.carTopImage}></Image>
            </View>
            <View>
              <Text style={styles.text}>Your ride has arrived</Text>
            </View>
            <View style={styles.modalbuttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  setContactDriverModalVisible(!ContactDriverModalVisible)
                }
                style={styles.Okbtn}>
                <Text style={styles.OkbtnText}>OK!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Callbtn} onPress={RatingHandler}>
                <Text style={styles.OkbtnText}>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Arriving</Text>
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
        <TouchableOpacity
          style={styles.ContactButton}
          onPress={() => setContactDriverModalVisible(true)}>
          <Text style={styles.ContactButtonText}>Contact Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.DeclineButtonWrapper}
          onPress={() => setRideCancelModal(!RideCancelModal)}>
          <View style={styles.center}>
            <Feather
              name="x"
              color={'#000000'}
              size={25}
              style={styles.CrossIcon}></Feather>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Arriving;
