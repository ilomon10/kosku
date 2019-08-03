import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, Image, GestureResponderEvent } from 'react-native';

import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Text from './Text';
import constant from './constant';

export interface IProps {
  onPress?: (event: GestureResponderEvent) => void;

  imageSource?: string;
  title?: string;
  description?: string;
  price?: string;
  isFavorite?: boolean;
  facility?: Array<string>;
}

class ExplorerListItem extends Component<IProps> {
  render() {
    const { onPress, title, price, facility, description, isFavorite } = this.props;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={{ flexDirection: 'row' }} pointerEvents='box-only'>
          <View style={{ padding: 16, paddingLeft: 8, }}>
            <Image style={{ width: 100, height: 56, borderRadius: 4, backgroundColor: constant.colors.grey }}
              source={{ uri: '../image.png' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', paddingTop: 16, paddingBottom: 16, paddingRight: 16, borderBottomColor: constant.colors.grey, borderBottomWidth: 1 }}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text variant='regular'>{title}</Text>
              <View style={{ flexDirection: 'row' }}>
                {facility.map(a => (
                  <Icon key={a} name={a} solid style={{ fontSize: 16, paddingRight: 8, color: constant.colors.foggy }} />
                ))}
              </View>
              <Text variant='macro-1' ellipsizeMode='tail' numberOfLines={1}>{description}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Text variant='small'>{price}</Text>
              <Icon name={'heart'} solid style={{ fontSize: 16, color: isFavorite ? constant.colors.red : constant.colors.grey }} />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default ExplorerListItem;