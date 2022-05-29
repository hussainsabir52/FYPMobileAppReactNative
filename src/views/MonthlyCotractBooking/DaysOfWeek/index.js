import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import WeekdayPicker from 'react-native-weekday-picker';

export default function DaysofWeek({ navigation }) {
  //let days = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 0, 0: 0 };
  const [weekdays, setWeekdays] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 0,
    0: 0,
  });
  const [state, setState] = useState(false);
  const handleChange = (days) => {
    setState(true);
    setWeekdays(days);
    console.log(days);
  };
  const DaysConfirm = () => {
    navigation.navigate('TimePicker');
  };
  useEffect(() => {
    setState(false);
  });
  return (
    <View style={styles.container}>
      <View style={styles.chevron}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-left"
            size={20}
            color="#000000"
            style={styles.chevronicon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Headingwrapper}>
        <Text style={styles.headingText}>Select Days of Week</Text>
      </View>
      <View style={styles.WeekdayPicker}>
        <WeekdayPicker
          days={weekdays}
          onChange={handleChange}
          style={styles.picker}
          dayStyle={styles.day}
        />
      </View>
      <View style={styles.Continue}>
        <TouchableOpacity style={styles.btnConfirm} onPress={DaysConfirm}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
