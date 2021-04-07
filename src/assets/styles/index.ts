import {StyleSheet} from 'react-native';
import {BUTTON_TEXT_COLOR, SECONDARY_TEXT_COLOR} from './colors';
import {
  CONTAINER_HORIZONTAL_PADDING,
  DEFAULT_SPACE,
  LARGE_SPACE,
  SMALL_SPACE,
} from './spaces';
import {
  LARGE_TEXT_SIZE,
  PRIMARY_TEXT_SIZE,
  SECONDARY_TEXT_SIZE,
} from './typography';

export const styles = StyleSheet.create({
  header: {
    fontSize: LARGE_TEXT_SIZE,
    alignSelf: 'center',
    marginBottom: DEFAULT_SPACE,
    marginTop: LARGE_SPACE,
  },
  title: {
    fontSize: PRIMARY_TEXT_SIZE,
    marginBottom: DEFAULT_SPACE,
    alignSelf: 'center',
  },
  button: {
    color: BUTTON_TEXT_COLOR,
    textAlign: 'center',
  },
  link: {
    color: SECONDARY_TEXT_COLOR,
    fontSize: SECONDARY_TEXT_SIZE,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  icon: {
    padding: CONTAINER_HORIZONTAL_PADDING,
  },
  column: {
    marginBottom: SMALL_SPACE,
  },
  inputIcon: {
    marginRight: CONTAINER_HORIZONTAL_PADDING,
  },
});

export * from './colors';
export * from './spaces';
export * from './strings';
export * from './typography';
