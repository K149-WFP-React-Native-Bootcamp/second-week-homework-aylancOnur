import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MyButton = ({buttonText, handlePress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

// Parent componentten props geçilmediği durumlarda gösterilecek deault proplar.
MyButton.defaultProps = {
  buttonText: 'title is undefined',
  handlePress: () => null,
};

// Parent ten gelecek propların tipini belirler.
MyButton.propTypes = {
  buttonText: PropTypes.string,
  handlePress: PropTypes.func,
};

export {MyButton};
