import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {MyButton} from '../../components/MyButton';
import styles from './styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('email@mail.com');
  const [password, setPassword] = useState('password');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={d => setEmail(d)}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={d => setPassword(d)}
      />
      <MyButton
        handlePress={() => navigation.navigate('Home')}
        buttonText={'Login'}
      />
    </View>
  );
};

export {Login};
