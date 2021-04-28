import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../../../assets';
import {MessageIcon, PlusIcon} from '../../Icons';
import {StyledTextInput, StyledTextInputProps} from '../StyledTextInput';

const PLUS_ICON = 'plus';
const MESSAGE_ICON = 'message';

export interface InputWithIconProps {
  icon?: typeof PLUS_ICON | typeof MESSAGE_ICON;
  onPressIcon?: () => void;
}

const icons = {
  [PLUS_ICON]: <PlusIcon width={24} height={24} style={styles.inputIcon} />,
  [MESSAGE_ICON]: (
    <MessageIcon width={24} height={24} style={styles.inputIcon} />
  ),
};

export const InputWithIcon: React.FC<
  InputWithIconProps & StyledTextInputProps
> = React.forwardRef((props, ref) => {
  const {icon, onPressIcon} = props;

  return (
    <>
      {icon &&
        (onPressIcon ? (
          <TouchableOpacity onPress={onPressIcon}>
            {icons[icon]}
          </TouchableOpacity>
        ) : (
          icons[icon]
        ))}
      <StyledTextInput {...props} ref={ref} />
    </>
  );
});
