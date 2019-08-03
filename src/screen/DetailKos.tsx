import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import Text from '../components/Text';
import Button from '../components/Button';
import Header from '../components/Header';
import Picker from '../components/Picker';
import PickerItem from '../components/PickerItem';
import ListItem from '../components/ListItem';
import Checkbox from '../components/Checkbox';
import PickerBase from '../components/PickerBase';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
}

class DetailKos extends Component<IProps> {
  static navigationOptions = {
    header: (<Header
      title='Detail'
      left={<Button title='h Left'
        pressColor='rgba(0, 0, 0, .32)' />}
      right={<Button variant='outlined' title='h Right'
        pressColor='rgba(0, 0, 0, .32)' />}
    />)
  }
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <StatusBar barStyle='dark-content'/>
        <Text variant='regular'>bijon {this.props.navigation.getParam('id')}</Text>
      </View>
    )
  }
}

export default DetailKos;