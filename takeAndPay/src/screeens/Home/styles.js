import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(4),
  },
  card: {
    width: W(44),
    borderWidth: 0.5,
    borderColor: '#f0f0f0',
    borderRadius: 8,
    margin: W(1),
    marginBottom: W(5),
  },
  image: {
    height: H(18),
    borderRadius: 8,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
