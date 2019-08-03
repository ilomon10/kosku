import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import PickerItem from '../components/PickerItem';
import ListItem from '../components/ListItem';
import Checkbox from '../components/Checkbox';
import PickerBase from '../components/PickerBase';

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  navigation: Navigation;
}

interface IState {
  facility: Array<string>;
  facilitySelected: Array<string>;

  price: Array<string>;
  priceSelected: string;

  isPricePickerVisible: boolean;
}

class Filter extends Component<IProps, IState> {
  static navigationOptions = {
    headerTitle: 'Filter'
  }
  state = {
    facility: [
      'Wifi',
      'Televisi',
      'Kasur',
      'Kasur Besar',
      'Kamar Mandi',
      'Tempat Parkir',
    ],
    facilitySelected: [],

    price: ['0k-100k', '101k-200k'],
    priceSelected: '0k-100k',

    isPricePickerVisible: false,
  }
  render(): React.ReactElement {
    return (
      <View>
        <StatusBar barStyle='dark-content'/>
        <ListItem button border title='Harga' value={this.state.priceSelected}
          onPress={() => this.setState({ isPricePickerVisible: true })} />
        <PickerBase noBody visible={this.state.isPricePickerVisible}
          onBackdropPress={() => this.setState({ isPricePickerVisible: false })}>
          {this.state.price.map((v, i) => (
            <PickerItem key={i} label={v}
              active={this.state.priceSelected === v}
              onPress={() => this.setState({
                priceSelected: v,
                isPricePickerVisible: false,
              })} />
          ))}
        </PickerBase>
        <ListItem header title='Fasilitas' />
        {this.state.facility.map((title, idx) =>
          <ListItem key={title} border={idx === this.state.facility.length - 1}
            button title={title} onPress={this.toggleFacility.bind(this, title)}
            actionButton={<Checkbox pointerEvents="none"
              value={this.state.facilitySelected.indexOf(title) !== -1} />} />)}
      </View>
    )
  }
  toggleFacility(facility: string): void {
    this.setState(({ facilitySelected }) => {
      if (facilitySelected.length === 0) return { facilitySelected: [...facilitySelected, facility] };

      if (facilitySelected.indexOf(facility) !== -1) return { facilitySelected: facilitySelected.filter(a => a !== facility) }
      else return { facilitySelected: [...facilitySelected, facility] };
    })
  }
}

export default Filter;