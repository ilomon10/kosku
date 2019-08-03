import React, { Component } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, View, StyleSheet } from 'react-native';


import constant from './constant';
import Text from './Text';
import TouchableItem from './TouchableItem';

export interface Props {
  title: string;
  borderless?: boolean;
  pressColor?: string;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

class Button extends Component<Props> {
  static defaultProps = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)'
  }
  render() {
    const { onPress, borderless, title } = this.props;
    return (
      <TouchableItem
        pressColor='rgba(0,0,0,0.35)'
        onPress={onPress}
        borderless
        style={styles.container}>
        <Text variant='small' style={styles.text}>{title}</Text>
      </TouchableItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.colors.primary,
    borderRadius: 4,
    height: 48,
    paddingTop: 16,
    paddingRight: 28,
    paddingBottom: 16,
    paddingLeft: 28,
  },
  text: {
    color: constant.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})

export default Button;