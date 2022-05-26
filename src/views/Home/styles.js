import { StyleSheet, StatusBar } from 'react-native';
import colors from '../../../assets/colors/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  // optionCard: {
  //   alignParentLeft: true,
  //   alignParentTop: true,
  //   width: 150,
  //   height: 231,
  //   marginLeft: 8,
  //   marginTop: 150,
  //   backgroundColor: '#46425B',
  //   elevation: 4,
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  // },
  // optionCard1: {
  //   alignParentLeft: true,
  //   alignParentTop: true,
  //   position: 'absolute',
  //   width: 150,
  //   height: 231,
  //   marginLeft: 185,
  //   marginTop: 150,
  //   backgroundColor: '#46425B',
  //   elevation: 4,
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  //   // border-radius: 20px 20px 10px 10px
  // },
  // optionCard2: {
  //   alignParentLeft: true,
  //   alignParentTop: true,
  //   position: 'absolute',
  //   width: 150,
  //   height: 231,
  //   marginLeft: 8,
  //   marginTop: 412,
  //   elevation: 4,
  //   backgroundColor: '#46425B',
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  //   // border-radius: 20px 20px 10px 10px
  // },
  // optionCard3: {
  //   alignParentLeft: true,
  //   alignParentTop: true,
  //   width: 150,
  //   height: 231,
  //   marginLeft: 185,
  //   marginTop: 32,
  //   elevation: 4,
  //   backgroundColor: '#46425B',
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  //   // border-radius: 20px 20px 10px 10px
  // },
  // OptImg: {
  //   width: 150,
  //   height: 100,
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  // },
  // OptTxt: {
  //   fontFamily: 'Laila-Medium',
  //   color: '#ffffff',
  //   height: 26,
  //   //fontFamily: 'NotoSans-SemiBold',
  //   fontSize: 15,
  //   fontStyle: 'normal',
  //   // fontWeight: '700',
  //   top: 10,
  //   textAlign: 'center',
  // },
  // buttonWhiteText: {
  //   fontSize: 12,
  //   textAlign: 'center',
  //   top: 6,
  //   color: '#000',
  //   fontWeight: 'bold',
  // },
  // primaryButton: {
  //   backgroundColor: colors.yellow,
  //   borderRadius: 30,
  //   color: '#ff5c5c',
  //   height: 30,
  //   width: 100,
  //   left: 25,
  //   top: 30,
  // },
  // scroll: {
  //   backgroundColor: '#F5F5F5',
  //   padding: 30,
  //   height: '100%',
  //   width: '100%',
  //   flexDirection: 'row',
  // },
  container: {
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.yellow,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  username: {
    fontFamily: 'Laila-Bold',
    fontSize: 24,
    alignSelf: 'flex-start',
    color: 'black',
    paddingBottom: 24,
  },
  nameWrapper: {
    //marginLeft: 50,
  },
  welcome: {
    fontFamily: 'Signika-Regular',
    fontSize: 16,
    color: '#595959',
  },
  menuicon: {
    marginTop: 25,
  },
  userProfile: {
    width: 38,
    height: 42,
    borderRadius: 40,
    marginTop: 12,
  },
  cardContainer: {
    marginTop: 10,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.darkBlack,
    paddingHorizontal: 30,
    paddingTop: 11,
    paddingBottom: 6,
    borderRadius: 20,
    height: 104,
    width: 170,
  },
  card3: {
    backgroundColor: colors.darkBlack,
    paddingHorizontal: 10,
    paddingTop: 11,

    borderRadius: 20,
    height: 104,
    width: 170,
  },
  carImage: {
    height: 53,
    width: 100,
    alignSelf: 'center',
  },
  cardText: {
    fontFamily: 'Laila-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 5,
    flex: 1,
    flexWrap: 'wrap',
  },
  calendarImage: {
    width: 41,
    height: 31,
    marginLeft: -20,
    marginTop: -10,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchbar: {
    backgroundColor: '#FFFFFF',
    width: '75%',
    alignSelf: 'center',
    zIndex: 1,
    marginTop: -18,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,
  },
  whereTO: {
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 2,
    height: 40,
  },
  searchIcon: {
    alignSelf: 'flex-end',
  },
  mapContainer: {
    height: hp('58%'),
    zIndex: -1,
    marginTop: '-6%',
  },
});
