import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Negotiation = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showView, setShowView] = useState(true);
  const offerAcceptHandler = () => {
    navigation.navigate('Arriving');
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalcontainer}>
            <Text style={styles.modalheading}>Choose Your Fare</Text>
            <View style={styles.negotiationWrapper}>
              <View style={styles.negotiaionbtn}>
                <TouchableOpacity>
                  <Text style={styles.negotiaionbtnText}>-10</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.negotiationAmount}>
                <Text style={styles.negotiationAmountText}>PKR</Text>
                <Text
                  style={[
                    styles.negotiationAmountText,
                    { fontSize: 22, marginTop: -7 },
                  ]}>
                  450
                </Text>
              </View>
              <View style={styles.negotiaionbtn}>
                <TouchableOpacity>
                  <Text style={styles.negotiaionbtnText}>+10</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.Okbtn}>
                <Text style={styles.OkbtnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            color="#000000"
            size={20}
            style={styles.chevronLeft}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.heading}>Accept Driver's Offers</Text>
      </View>
      <ScrollView>
        <View style={styles.offersContainer}>
          <View style={styles.OfferWrapper}>
            <View style={styles.userImg}>
              <Image
                source={require('../../../images/author-3.jpg')}
                style={styles.driverImg}></Image>
            </View>
            <View style={styles.NameVehicleWrapper}>
              <View style={styles.Name}>
                <Text style={styles.NameText}>Muhammad Asif</Text>
              </View>
              <View style={styles.rating}>
                <Image source={require('../../../images/rating.png')}></Image>
              </View>
              <View style={styles.Vehicle}>
                <Text style={styles.VehicleText}>White Suzuki Alto</Text>
              </View>
            </View>

            <View style={styles.amount}>
              <Text style={styles.amountText}>450</Text>
              <Text style={styles.amountText}>PKR</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={offerAcceptHandler}>
                <Feather
                  name="check"
                  color={'#000000'}
                  size={25}
                  style={styles.AcceptButton}></Feather>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="x"
                  color={'#FFFFFF'}
                  size={25}
                  style={styles.DeclineButton}></Feather>
              </TouchableOpacity>
            </View>
          </View>
          {showView && (
            <View style={styles.OfferWrapper}>
              <View style={styles.userImg}>
                <Image
                  source={require('../../../images/author-3.jpg')}
                  style={styles.driverImg}></Image>
              </View>
              <View style={styles.NameVehicleWrapper}>
                <View style={styles.Name}>
                  <Text style={styles.NameText}>Muhammad Asif</Text>
                </View>
                <View style={styles.rating}>
                  <Image source={require('../../../images/rating.png')}></Image>
                </View>
                <View style={styles.Vehicle}>
                  <Text style={styles.VehicleText}>White Suzuki Alto</Text>
                </View>
              </View>

              <View style={styles.amount}>
                <Text style={styles.amountText}>450</Text>
                <Text style={styles.amountText}>PKR</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={offerAcceptHandler}>
                  <Feather
                    name="check"
                    color={'#000000'}
                    size={25}
                    style={styles.AcceptButton}></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowView(!showView)}>
                  <Feather
                    name="x"
                    color={'#FFFFFF'}
                    size={25}
                    style={styles.DeclineButton}></Feather>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.OfferWrapper}>
            <View style={styles.userImg}>
              <Image
                source={require('../../../images/author-3.jpg')}
                style={styles.driverImg}></Image>
            </View>
            <View style={styles.NameVehicleWrapper}>
              <View style={styles.Name}>
                <Text style={styles.NameText}>Muhammad Asif</Text>
              </View>
              <View style={styles.rating}>
                <Image source={require('../../../images/rating.png')}></Image>
              </View>
              <View style={styles.Vehicle}>
                <Text style={styles.VehicleText}>White Suzuki Alto</Text>
              </View>
            </View>

            <View style={styles.amount}>
              <Text style={styles.amountText}>450</Text>
              <Text style={styles.amountText}>PKR</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={offerAcceptHandler}>
                <Feather
                  name="check"
                  color={'#000000'}
                  size={25}
                  style={styles.AcceptButton}></Feather>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="x"
                  color={'#FFFFFF'}
                  size={25}
                  style={styles.DeclineButton}></Feather>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.btnText}>Negotiate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Negotiation;
