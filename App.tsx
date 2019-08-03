import { createStackNavigator, createAppContainer } from 'react-navigation';

import Explorer from './src/screen/Explorer';
import Filter from './src/screen/Filter';
import DetailKos from './src/screen/DetailKos';

const AppNavigator = createStackNavigator({
  Explorer: Explorer,
  Filter: Filter,
  DetailKos: DetailKos,
})

export default createAppContainer(AppNavigator);