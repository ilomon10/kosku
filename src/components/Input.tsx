import React, { Component } from 'react';
import { TextInput, StyleSheet, StyleProp, TextStyle, TextInputProps } from 'react-native';

import { styles as TextStyles } from './Text'
import constant from './constant';

interface IProps extends TextInputProps { }

class Input extends Component<IProps> {
  render() {
    const { style, ...props } = this.props;
    return (
      <TextInput {...props} style={{ ...styles.input, ...(style as object) }} />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    ...TextStyles['small'],
    backgroundColor: constant.colors.white,
    borderRadius: 4,
    marginBottom: 16,
    height: 48,
    paddingRight: 28,
    paddingLeft: 28,
    width: '100%',
  }
})

export default Input;