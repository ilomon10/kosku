import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, GestureResponderEvent } from 'react-native';

import { FontAwesome5 as Icon } from '@expo/vector-icons';
import constant from './constant';

export interface IProps {
  value: boolean;
  onChange?: (value: boolean) => void;
  onPress?: (event: GestureResponderEvent) => void;
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
}

interface IState {
  value: boolean
}

class Checkbox extends Component<IProps, IState>{
  state = {
    value: false,
  }
  componentDidMount() {
    this.setState({
      value: this.props.value
    })
  }
  componentWillReceiveProps(n: Readonly<IProps>) {
    if (n.value !== this.state.value) {
      this.setState({
        value: n.value
      })
    }
  }
  componentDidUpdate() {
    if (this.props.onChange) this.props.onChange(this.state.value);
  }
  render() {
    const { value, onChange, onPress, pointerEvents, ...props } = this.props;
    return (
      <View pointerEvents={pointerEvents}>
        <TouchableWithoutFeedback {...props} onPress={this._onPress.bind(this)}>
          <View style={styles.container}>
            <View style={{ ...styles.border, borderColor: this.state.value ? constant.colors.accent : constant.colors.foggy }}>
              {this.state.value &&
                <Icon name='check' style={styles.check} />}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  _onPress(e: GestureResponderEvent) {
    if (typeof this.props.onPress === 'function') this.props.onPress(e);
    this.setState(({ value }) => ({ value: !value }));
  }
}

const styles = StyleSheet.create({
  container: {
  },
  border: {
    height: 16,
    width: 16,
    borderWidth: 1,
    backgroundColor: constant.colors.white,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    color: constant.colors.accent,
    fontSize: 10
  }
})

export default Checkbox;