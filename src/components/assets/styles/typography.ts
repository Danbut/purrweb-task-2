import {StyleSheet} from 'react-native';
import {BUTTON_TEXT_COLOR} from './colors';
import {DEFAULT_SPACE, LARGE_SPACE} from './spaces';

export const PRIMARY_TEXT_SIZE = 17;
export const SECONDARY_TEXT_SIZE = 13;
export const LARGE_TEXT_SIZE = 27; //? in figma 32 and 22
export const SMALL_TEXT_SIZE = 11; //? in figna 12 and 9 (one badge)

export default StyleSheet.create({
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
});
