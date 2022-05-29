import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
  buttonsContainer: {
    //marginTop: StatusBar.currentHeight,
    marginTop: '5%',
    marginBottom: '190%',
    //marginRight: '60%',
    width: '100%',
    height: '7%',
    padding: 5,
    flexDirection: 'column',
    //justifyContent: 'space-between',
  },
  ShowOptions: {
    height: 100,
    width: 150,
  },
  ConfirmButton: {
    // marginHorizontal: 10,
    height: 100,

    justifyContent: 'center',
    marginTop: hp('73%'),
  },
  btnConfirm: {
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
    marginHorizontal: 20,
    elevation: 10,
  },
  btnText: {
    color: colors.black,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
  },
  RBsheet: {
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
  },
  textbox: {
    fontWeight: '600',
    fontSize: 25,
    color: '#000000',
    textAlign: 'left',
    backgroundColor: colors.yellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -10,
  },
  searchBar: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
