
import { Dimensions, Platform } from 'react-native';

export const isIphoneX = (): boolean => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
};

export const safeAreaSpace = isIphoneX() ? 22 : 0;
export const safeStatusBarHeight = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0;
