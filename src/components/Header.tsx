import React, { Component } from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-navigation';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

import Text from './Text';

export interface IProps {
  title: string | React.ReactElement;
  left?: React.ReactElement;
  right?: React.ReactElement;
}

type SubviewProps = {
  style?: StyleProp<ViewStyle>
};
type SubviewName = 'left' | 'right' | 'title';

class Header extends Component<IProps> {
  render(): React.ReactElement {
    const { title: titleComponent, left: leftComponent, right: rightComponent } = this.props;
    const title = this.renderTitle(titleComponent);
    const left = this.renderLeft(leftComponent);
    const right = this.renderRight(rightComponent);
    const forceInset: SafeAreaViewProps['forceInset'] = {
      top: 'always',
      bottom: 'never',
      horizontal: 'always'
    }
    return (
      <SafeAreaView
        forceInset={forceInset}
        style={[styles.container]}>
        <View style={styles.flexOne}>
          <View style={styles.header}>
            {title}
            {left}
            {right}
          </View>
        </View>
      </SafeAreaView>
    )
  }
  private renderTitle = (comp: string | React.ReactNode) => {
    const HeaderTitleComponent = (): React.ReactNode =>
      typeof comp !== 'string' ? comp : <Text>{comp}</Text>;
    return this.renderSubview({
      style: {
        justifyContent: 'center',
        left: 0,
        right: 0
      }
    }, 'title', HeaderTitleComponent);
  }
  private renderLeft = (comp: React.ReactNode) => {
    const HeaderLeftComponent = () => (comp || null)
    return this.renderSubview({}, 'left', HeaderLeftComponent);
  }
  private renderRight = (comp: React.ReactNode) => {
    const HeaderRightComponent = () => (comp || null)
    return this.renderSubview({}, 'right', HeaderRightComponent);
  }
  private renderSubview = (
    props: SubviewProps,
    name: SubviewName,
    renderer: (props: SubviewProps) => React.ReactNode,
  ): React.ReactElement => {
    const subView = renderer(props);
    return (
      <View
        style={[
          styles[name],
          props.style
        ]}>
        {subView}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  transparentContainer: {
    ...StyleSheet.absoluteFillObject,
    elevation: 0,
  },
  container: {
    backgroundColor: 'white',
    height: 48,
    elevation: 1,
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  title: {
    bottom: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row'
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row'
  },
  right: {
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexOne: {
    flex: 1
  }
})

export default Header;