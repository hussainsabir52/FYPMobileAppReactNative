import { View, Text, Pressable, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Map from '../../components/Map'
import RBSheet from 'react-native-raw-bottom-sheet';

export default function RequestVehicle() {
    const [fareValue, setFareValue] = useState("");

    const refRBSheet = useRef();
    useEffect(() => {
      refRBSheet.current.open();
    });

  return (
    <View style={{
        height: '100%'
      }}>
      <Map/>
      <Text style={{fontSize: 40, color: 'black', backgroundColor: 'white'}}>Request Vehicle</Text>
      <View style={{
            marginTop: '2%',
            marginBottom: '190%',
            marginRight: '60%',
            width: '35%',
            height: '7%',
            padding: 5,
          }}>
        <Button title='Show Options' onPress={() => {refRBSheet.current.open()}} style={{
          position: 'sticky'
        }}/>
        <View style={{marginTop: '5%'}}>
          <Button title='Confirm Vehicle
          ' style={{}} disabled={true}/>
        </View>
        </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: '#D3D3D3',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 25,
            marginTop: 15,
            color: '#000',
            textAlign: 'left',
            marginLeft: 20,
          }}>
          Select Vehicle
        </Text>
        <View style={{paddingLeft: '5%'}}>
        <TouchableOpacity>
            <Text>ECO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>STANDARD</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>PREMIUM</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>BIKE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>AUTO</Text>
        </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 25,
            marginTop: 15,
            color: '#000',
            textAlign: 'left',
            marginLeft: 20,
          }}>
          Enter your Fare
        </Text>
        <View style={{paddingLeft:'5%'}}>
        <TextInput
        value={fareValue}
        placeholder='Enter Your Fare' onChangeText={setFareValue}></TextInput>
        </View>
      </RBSheet>
    </View>
  )
}