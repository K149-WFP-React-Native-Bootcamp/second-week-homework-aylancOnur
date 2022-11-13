import {StyleSheet} from 'react-native';
import {W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(10),
    justifyContent: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default styles;
