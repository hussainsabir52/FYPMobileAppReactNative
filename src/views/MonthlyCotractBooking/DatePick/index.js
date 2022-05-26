import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Feather from 'react-native-vector-icons/Feather';

const DatePick = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [text, setText] = useState('');

  const [endDate, setEndDate] = useState(new Date());
  const [text1, setText1] = useState('');

  const handleConfirm = (event, date) => {
    const currentDate = date || startDate;
    setStartDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log('A date has been picked: ', date);

    if (isSelected2) {
      const currentDate = date || endDate;
      setEndDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();
      setText1(fDate);
    }
    hideDatePicker();
    setisSelected1(false);
    setisSelected2(true);
  };
  const [isSelected1, setisSelected1] = useState(true);
  const [isSelected2, setisSelected2] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeadingText}>Monthly Contract Booking</Text>
        <Text style={styles.captionText}>
          Book your ride for your commute to work on monthly basis
        </Text>
      </View>
      <View style={styles.center}>
        <View>
          <TouchableOpacity
            onPress={showDatePicker}
            style={[styles.DateCard, isSelected1 ? styles.SelectedCard : null]}>
            <Text
              style={[
                styles.number,
                isSelected1 ? styles.SelectedNumber : null,
              ]}>
              1
            </Text>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {text === '' ? (
                <Text style={styles.normalText}>Select Start Date</Text>
              ) : (
                <Text
                  style={[
                    styles.normalText,
                    {
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  Start Date
                </Text>
              )}
              <Text style={{ color: '#757575' }}>{text}</Text>
            </View>
            {/* <Text style={styles.normalText}>Select Start Date</Text> */}

            <Feather
              name="chevron-right"
              size={20}
              color="#757575"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={showDatePicker}
            style={[styles.DateCard, isSelected2 ? styles.SelectedCard : null]}>
            <Text
              style={[
                styles.number,
                isSelected2 ? styles.SelectedNumber : null,
              ]}>
              2
            </Text>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {text1 === '' ? (
                <Text style={styles.normalText}>Select End Date</Text>
              ) : (
                <Text
                  style={[
                    styles.normalText,
                    {
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  End Date
                </Text>
              )}
              <Text style={{ color: '#757575' }}>{text1}</Text>
            </View>
            <Feather
              name="chevron-right"
              size={20}
              color="#757575"
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          //onChange={handleConfirm}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.Continue} opacity={0.5}>
        <TouchableOpacity style={styles.btnConfirm} disabled>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DatePick;
