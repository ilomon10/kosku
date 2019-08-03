import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, GestureResponderEvent } from 'react-native';

import PickerBase from './PickerBase';
import { IProps as PickerItemProps } from './PickerItem';

export interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

interface IState {
  value: string;
  visible: boolean
}

class Picker extends Component<IProps, IState> {
  state = {
    visible: false,
    value: ''
  }
  componentWillUnmount() {
    this.setState({
      visible: false,
      value: '',
    })
  }
  render() {
    const children = React.Children.map(this.props.children, (child: React.ReactElement<PickerItemProps>) =>
      React.cloneElement(child, {
        ...child.props,
        onPress: (ev: GestureResponderEvent) => {
          child.props.onPress(ev);
          this.setState(({ value }) => {
            const val = child.props.value || child.props.title;
            if (value !== val) this.props.onChange(val);
            return {
              value: val,
              visible: false
            }
          });
        }
      })
    )
    return (
      <TouchableNativeFeedback onPress={() => { this.setState({ visible: true }) }}>
        <View style={{ backgroundColor: 'white' }}>
          <PickerBase value={this.state.value} visible={this.state.visible}
            onBackdropPress={() => { this.setState({ visible: false }) }}>
            {children}
          </PickerBase>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Picker;