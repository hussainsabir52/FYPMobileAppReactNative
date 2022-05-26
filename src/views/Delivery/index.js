import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Delivery/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Delivery = ({ navigation }) => {
  const PlaceOrder = () => {
    navigation.navigate('Negotiation');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            color="#000000"
            size={20}
            style={styles.chevronLeft}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Confirmation</Text>
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
      </View>
      <View style={styles.FareWrapper}>
        <Text style={styles.LocationHeading}>Choose Your Fare</Text>
        <View style={styles.recommendedFare}>
          <Text style={styles.NormalText}>Recommended service fee</Text>
          <TextInput
            placeholder="PKR 275"
            placeholderTextColor="#000000"
            keyboardType="number-pad"
            style={styles.FareInput}></TextInput>
        </View>
      </View>
      <View style={styles.instructions}>
        <View style={styles.pencilIcon}>
          <MaterialCommunityIcons
            name="pencil"
            color="#666666"
            size={25}></MaterialCommunityIcons>
        </View>
        <View style={styles.addInstruction}>
          <Text style={[styles.LocationHeading, { fontSize: 16 }]}>
            Instructions
          </Text>
          <TextInput
            placeholder="Add Instructions"
            placeholderTextColor="#B0B0B0"
            style={styles.placeholder}></TextInput>
        </View>
      </View>
      <View style={styles.warning}>
        <AntDesign
          name="exclamationcircleo"
          size={24}
          color="#000000"></AntDesign>
        <Text style={styles.warningText}>
          Rider must be paid in cash at drop off location for the total value
        </Text>
      </View>
      <View style={{ marginTop: hp('20%') }}>
        <TouchableOpacity style={styles.btnConfirm} onPress={PlaceOrder}>
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Delivery;
