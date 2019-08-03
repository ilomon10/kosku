import React from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';

import Text from './Text'
import constant from './constant';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface MainIProps {
  title: string;
  subtitle?: string;
  value?: string;
  header?: boolean;
  actionButton?: React.ReactNode;
  border?: boolean;
}

export interface IProps extends MainIProps {
  onPress?: (event: GestureResponderEvent) => void;
  button?: boolean;
}

const MainComponent: React.FunctionComponent<MainIProps> = ({ title, subtitle, value, header, children, actionButton, border }): React.ReactElement => (
  <View style={styles.container}>
    <View style={{ ...styles.content, ...border && styles.border }}>
      <View style={{ flex: 1 }}>
        <Text variant={header ? 'large' : 'regular'}>{title}</Text>
        {subtitle &&
          <Text variant='macro-1'>{subtitle}</Text>}
      </View>
      {value &&
        <View>
          <Text variant='regular' style={{ color: constant.colors.accent }}>{value}</Text>
        </View>}
      {actionButton &&
        <View>
          {actionButton}
        </View>}
    </View>
  </View >
)

const ListItem: React.FunctionComponent<IProps> = ({ button, onPress, ...props }): React.ReactElement => {
  if (button) return (
    <TouchableNativeFeedback onPress={onPress}>
      <MainComponent {...props} />
    </TouchableNativeFeedback>
  )
  else return (<MainComponent {...props} />)
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 0,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: constant.colors.grey,
  }
})

export default ListItem;