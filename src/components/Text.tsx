import React from 'react';
import { StyleSheet, Text as NativeText, TextProps } from 'react-native';

import constant from './constant';

import 'react-native-web';

/**
 * Extends from TextProps
 */
interface IProps extends TextProps {
  /**
   * Text Variant Default
   * 
   * - `title-1`: 44pt
   * - `title-2`: 32pt
   * - `title-3`: 24pt
   * - `large`: 19pt
   * - `regular`: 17pt
   * - `small`: 14pt
   * - `macro-1`: 8pt
   */
  variant?: 'title-1' | 'title-2' | 'title-3' | 'large' | 'regular' | 'small' | 'macro-1';
}

const defaultProps: IProps = {
  variant: 'regular'
}

const Text: React.FunctionComponent<IProps> = ({ variant, style, ...props }: IProps): React.ReactElement => (
  <NativeText {...props} style={{ ...styles.base, ...styles[variant], ...(style as object) }}></NativeText>
)

Text.defaultProps = defaultProps;

export const styles = StyleSheet.create({
  "base": {
    color: constant.colors['black']
  },
  "title-1": {
    fontSize: 44,
    lineHeight: 56,
  },
  "title-2": {
    fontSize: 32,
    lineHeight: 36
  },
  "title-3": {
    fontSize: 24,
    lineHeight: 28
  },
  "large": {
    fontSize: 19,
    lineHeight: 24
  },
  "regular": {
    fontSize: 17,
    lineHeight: 22
  },
  "small": {
    fontSize: 14,
    lineHeight: 18
  },
  "macro-1": {
    fontSize: 8,
    lineHeight: 8
  },
})

export default Text;