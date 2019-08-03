import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableNativeFeedback, StyleProp, ViewStyle, TextInputProps } from 'react-native';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { styles as TextStyles } from './Text'
import constant from './constant';

export interface IProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  
  style?: StyleProp<ViewStyle>;
  onFilterTouch?: () => void;
  onSearchTouch?: () => void;
}

class ExplorerSearchBox extends Component<IProps> {
  render() {
    const { style, onFilterTouch, onSearchTouch, ...props } = this.props;
    return (
      <View style={{ ...styles.container, ...(style as object) }}>
        <TextInput {...props} style={styles.input} />
        <TouchableNativeFeedback onPress={onFilterTouch}>
          <View pointerEvents='box-only' style={styles.icon}>
            <Icon name={'sliders-h'} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={onSearchTouch}>
          <View pointerEvents='box-only' style={{ ...styles.icon, marginRight: -8, }}>
            <Icon name={'search'} />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.colors.white,
    borderRadius: 4,
    margin: 8,
    marginBottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: constant.colors.foggy,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    ...TextStyles['small'],
    justifyContent: 'center',
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
  },
  input: {
    ...TextStyles['small'],
    flex: 1,
    height: 48,
  }
})

export default ExplorerSearchBox;