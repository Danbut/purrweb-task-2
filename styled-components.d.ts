import {Theme} from './src/assets';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
