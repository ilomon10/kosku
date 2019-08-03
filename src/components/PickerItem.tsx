import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, GestureResponderEvent, StyleSheet } from 'react-native';

import Text from './Text';

export interface IProps {
  title?: string;
  value?: string;
  label?: string;
  active?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const PickerItem: React.FunctionComponent<IProps> = ({ label, active, ...props }): React.ReactElement => (
  <TouchableNativeFeedback {...props}>
    <View style={active ? StyleSheet.flatten([styles.container, styles.active]) : styles.container}>
      <Text>{label}</Text>
    </View>
  </TouchableNativeFeedback >
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  }
})

export default PickerItem;