import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SearchBar } from 'react-native-elements';
import Map from '../../components/Map';
import Data from './Data';
import styles from './styles';
export default function DropoffLocation({ navigation }, props) {
  const [search, setSearch] = useState('');
  const [BSheight, setBSheight] = useState(150);
  const [sdata, setSdata] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState(null);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      //const res = require('./Data.json');
      setSdata(Data);
      console.log(sdata);
    } catch (err) {
      console.log(err);
    }
  };
  const refRBSheet = useRef();
  useEffect(() => {
    refRBSheet.current.open();
  });

  const Dropoffhandler = () => {
    setBSheight(850);
  };

  const confirmDropoffHandler = () => {
    navigation.navigate('Pickup');
  };

  const searchResults = (search) => {
    setSearch(search);
    console.log(sdata);
    let matches = sdata.filter((loc) => {
      const regex = new RegExp(`^${search}`, 'gi');
      return loc.Location.match(regex);
    });

    if (search.length === 0) {
      matches = [];
    }
    console.log(matches);
    setSuggestions(matches);
  };

  const selectLocation = (item) => {
    setLocation(item);
    refRBSheet.current.close();
    setbuttonDisabled(false);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        selectLocation(item);
      }}>
      <Text
        style={{
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
        }}>
        {item.Location}
      </Text>
    </Pressable>
  );

  return (
    // <ScrollView style={{
    // }}>

    <View style={styles.container}>
      <Map
        location={
          location && {
            longitude: location['Longitude'],
            latitude: location['Latitude'],
          }
        }
      />
      {/* <Text
          style={{
            backgroundColor: '#D3D3D3',
            marginTop: 10,
            marginBottom: 600,
            marginRight: 330,
            color: '#000',
            width: 30,
            height: 30,
            padding: 5,
            borderRadius: 100,
            paddingLeft: 10.5,
          }}>
          X
        </Text> */}
      <View style={styles.buttonsContainer}>
        <View style={styles.ShowOptions}>
          <Button
            title="Show Options"
            onPress={() => {
              refRBSheet.current.open();
              setBSheight(150);
            }}
          />
        </View>

        <View style={styles.ConfirmButton}>
          <Button
            title="Confirm Dropoff
          "
            color="#FEDB29"
            onPress={confirmDropoffHandler}
            disabled={buttonDisabled}
          />
        </View>
      </View>

      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        closeOnPressBack={true}
        height={BSheight}
        customStyles={styles.RBsheet}>
        <Text style={styles.textbox}>Where do you want to go?</Text>
        <View style={{ marginTop: 10 }}>
          <SearchBar
            lightTheme={true}
            containerStyle={styles.searchBar}
            inputContainerStyle={{
              backgroundColor: '#F0F0F0',
            }}
            inputStyle={{
              color: '#000',
            }}
            round={true}
            placeholder="Enter you destination"
            onChangeText={searchResults}
            value={search}
            onFocus={Dropoffhandler}
          />
          {/* {suggestions && suggestions.map((suggestion,i)=>{
            <Text key={i} style={{height: 500, width: 400, marginTop: '50%'}}>{suggestion.Location}</Text>
          })} */}
          <FlatList
            data={suggestions}
            renderItem={renderItem}
            keyExtractor={() => Math.random(10000)}
          />
        </View>
      </RBSheet>
    </View>
    // </ScrollView>
  );
}
