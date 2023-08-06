import {StyleProp, TextStyle} from 'react-native';

export interface PrimaryTextProps {
  variant?: 'default' | 'title' | 'errorMessage' | 'label';
  text: string;
  style?: StyleProp<TextStyle>;
}
