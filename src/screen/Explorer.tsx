import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import ExplorerListItem from '../components/explorerListItem';
import ExplorerSearchBox from '../components/explorerSearchBox';
import constant from '../components/constant';

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  navigation: Navigation;
}

type TData = {
  id: string;
  title: string;
  price: string;
  facility: Array<string>;
  isFavorite?: boolean;
  description: string;
}

interface IState {
  data: Array<TData>;
  searchText: string;
}

class Explorer extends Component<IProps, IState> {
  state = {
    data: [],
    searchText: '',
  }
  public static navigationOptions = ({ navigation }: { navigation: Navigation }) => ({
    header: null
  })
  componentDidMount(): void {
    this.setState({
      searchText: '',
      data: [{
        title: 'Rumah Uya', id: '1',
        price: '100k/hari',
        facility: ['wifi', 'bed', 'bath'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }, {
        title: 'B bijon', id: '2',
        price: '250k/bulan',
        facility: ['female', 'box', 'bed'],
        isFavorite: true,
        description: 'Similique placeat inventore odio ea debitis dolorem sed, ab nihil delectus at, ad ducimus suscipit provident eaque minus praesentium sunt eum nam.'
      }, {
        title: 'Rumah Uya', id: '3',
        price: '100k/hari',
        facility: ['wifi', 'bed', 'bath'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }, {
        title: 'B bijon', id: '4',
        price: '250k/bulan',
        facility: ['female', 'box', 'bed'],
        isFavorite: true,
        description: 'Similique placeat inventore odio ea debitis dolorem sed, ab nihil delectus at, ad ducimus suscipit provident eaque minus praesentium sunt eum nam.'
      }]
    })
  }
  render(): React.ReactElement {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <ExplorerSearchBox value={this.state.searchText} placeholder='Cari lokasi tumpuan'
              onChangeText={searchText => this.setState({ searchText })}
              onFilterTouch={() => this.props.navigation.navigate('Filter')} />
            <FlatList
              data={this.state.data}
              keyExtractor={(a) => a.id}
              renderItem={({ item }) =>
                <ExplorerListItem
                  onPress={() => this.props.navigation.navigate('DetailKos', { id: item.id })}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  isFavorite={item.isFavorite}
                  facility={item.facility} />}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    position: 'absolute',
    top: '60%',
    bottom: 0,
    right: 8,
    left: 8,
  },
  card: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    backgroundColor: constant.colors.white,
  }
})

export default Explorer;