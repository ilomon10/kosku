import React from 'react';

import {
  View,
  ViewProps,
  TouchableNativeFeedback,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';

type IProps = ViewProps & {
  pressColor: string;
  disabled?: boolean;
  borderless?: boolean;
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export default class TouchableItem extends React.Component<IProps> {
  render(): React.ReactElement {
    const { style, ...props } = this.props;
    return (
      <TouchableNativeFeedback
        {...props}
        style={null}
        background={TouchableNativeFeedback.Ripple(
          this.props.pressColor,
          this.props.borderless
        )}>
        <View style={style}>{React.Children.only(this.props.children)}</View>
      </TouchableNativeFeedback>
    )
  }
}