import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';
import { colours } from '../utils/colours';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton onPress = {(subject)=>addSubject(subject)}title="+" size={50} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{},
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sl,
    borderWidth: 1,
    borderColor: colours.white,
    color: colours.white,
  },
  button: {
    justifyContent: 'center', 
  },
  
});
