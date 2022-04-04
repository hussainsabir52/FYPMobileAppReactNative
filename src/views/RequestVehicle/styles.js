import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  requestvehicle: {
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    padding: 8,
  },
  showOptions: {
    marginTop: '2%',
    marginBottom: '190%',
    marginRight: '60%',
    width: '35%',
    height: '7%',
    padding: 5,
  },
  RBsheet: {
    wrapper: {
      backgroundColor: 'transparent',
    },
    container: {
      backgroundColor: 'white',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    draggableIcon: {
      backgroundColor: 'white',
    },
  },
  selectVehicle: {
    textAlign: 'center',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    marginTop: 10,
    color: '#000',
    textAlign: 'left',
    marginLeft: 20,
  },
  vehicleContainer: {
    paddingLeft: '2%',
    flexDirection: 'row',
    height: 75,
    width: '100%',
    flexGrow: 0,
  },
  vehicleCard: {
    backgroundColor: '#F5E9A6',
    margin: 5,
    padding: 10,
    borderRadius: 25,
    width: '19%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleCardImg: {
    width: 90,
    height: 35,
  },
  EcoImg: {
    width: 70,
    height: 30,
    marginBottom: 0,
    marginTop: 5,
  },
  BikeImg: {
    width: 70,
    height: 35,
  },
  AutoImg: {
    width: 60,
    height: 40,
  },
  vehicleCardText: {
    color: 'black',
    paddingBottom: 0,
    fontFamily: 'NotoSans-SemiBold',
    textAlign: 'center',
  },
  hr: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  fareInput: {
    height: '30%',
    width: '95%',
    color: 'black',
    backgroundColor: '#EFEFEF',
  },
  ConfirmVehicle: {
    //backgroundColor: '#000000',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnConfirm: {
    height: 50,
    paddingVertical: 20,
    padding: 20,
    width: '70%',
  },
});
