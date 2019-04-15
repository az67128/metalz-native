import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  content: { flex: 1, backgroundColor: '#eeeeee' },
  slide: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#212121',
  },
  slide1: { alignItems: 'flex-end' },
  slide2: { alignItems: 'flex-start' },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: { transform: [{ rotate: '-90deg' }] },
  text2: { transform: [{ rotate: '90deg' }] },
});
export default style;
