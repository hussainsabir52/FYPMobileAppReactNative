import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  userProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#5C5F68',
    margin: 20,
    marginTop: 80,
  },
  text: {
    color: '#000',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
  userdata: {
    color: '#8D8D8D',
  },
  textWrapper: {
    margin: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 20,
    color: colors.black,
    marginLeft: '10%',
    // textAlign: 'center',
  },
  chevronLeft: {
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  red: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#FF0000',
  },
});
