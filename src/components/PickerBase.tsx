import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Modal, StyleSheet, GestureResponderEvent } from 'react-native';

import Text from './Text';

export interface IProps {
  value?: string;
  noBody?: boolean;
  visible?: boolean;
  onBackdropPress?: (event: GestureResponderEvent) => void;
}

class PickerBase extends Component<IProps> {
  static defaultProps: IProps = {
    visible: false,
    noBody: false,
  }
  render() {
    return (
      <View>
        {!this.props.noBody &&
          <View style={styles.container}>
            <Text variant='regular'>{this.props.value}</Text>
          </View>}
        <Modal visible={this.props.visible} transparent={true} animationType='fade'>
          <TouchableWithoutFeedback onPress={this.onBackdropPress.bind(this)}>
            <View style={styles.backdrop}>
              <View style={styles.modalContainer}>
                {this.props.children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    )
  }
  onBackdropPress(e: GestureResponderEvent) {
    this.props.onBackdropPress(e);
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    width: '90%',
    backgroundColor: 'white',
  }
})

export default PickerBase;