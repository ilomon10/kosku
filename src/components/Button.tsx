import React, { Component } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';


import constant from './constant';
import Text from './Text';
import TouchableItem from './TouchableItem';

export interface IProps {
  title: string;
  variant: 'text' | 'outlined' | 'contained';
  borderless: boolean;
  pressColor: string;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

class Button extends Component<IProps> {
  static defaultProps: IProps = {
    title: '',
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)',
    variant: 'text'
  }
  render() {
    const { onPress, borderless, variant, title } = this.props;
    const wrapperStyle: StyleProp<ViewStyle> = {
      overflow: borderless ? 'visible': 'hidden',
      borderRadius: styles.container.borderRadius,
    }
    return (
      <View style={wrapperStyle}>
        <TouchableItem
          pressColor='rgba(0,0,0,0.35)'
          onPress={onPress}
          borderless={borderless}
          style={[styles.container, styles[variant]]}>
          <Text variant='small' style={styles.title[`title-${variant}`]}>{title}</Text>
        </TouchableItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 48,
    paddingTop: 16,
    paddingRight: 28,
    paddingBottom: 16,
    paddingLeft: 28,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    backgroundColor: 'transparent',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: constant.colors.primary,
    borderWidth: 1
  },
  contained: {
    backgroundColor: constant.colors.primary,
  },
  'title-text': {
    color: constant.colors.primary,
  },
  'title-contained': {
    color: constant.colors.white,
  },
})

export default Button;