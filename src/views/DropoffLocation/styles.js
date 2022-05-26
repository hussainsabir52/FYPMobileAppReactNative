import { StatusBar, StyleSheet } from 'react-native';

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
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  ShowOptions: {
    height: 100,
  },
  ConfirmButton: {
    marginHorizontal: 10,
    height: 100,
    alignItems: 'center',
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
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 25,
    marginTop: 15,
    color: '#000',
    textAlign: 'left',
    marginLeft: 20,
  },
  searchBar: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
