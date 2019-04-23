import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', height: 40 },
  input: {
    height: 40,
    marginLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    fontSize: 20,
    flex: 2,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  icon: { width: 16, height: 16, marginRight: 7, alignSelf: 'center' },
});
export default style;
