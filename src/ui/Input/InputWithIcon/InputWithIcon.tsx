import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from 'styled-components/native';
import {MessageIcon, PlusIcon} from '../../Icons';
import {StyledTextInput, StyledTextInputProps} from '../StyledTextInput';

const PLUS_ICON = 'plus';
const MESSAGE_ICON = 'message';

export interface InputWithIconProps {
  icon?: typeof PLUS_ICON | typeof MESSAGE_ICON;
  onPressIcon?: () => void;
}

const Icon: React.FC<{icon: typeof PLUS_ICON | typeof MESSAGE_ICON}> = ({
  icon,
}) => {
  const theme = useContext(ThemeContext);

  if (PLUS_ICON === icon) {
    return (
      <PlusIcon
        width={24}
        height={24}
        style={{marginRight: theme.spaces.container}}
      />
    );
  } else if (MESSAGE_ICON === icon) {
    return (
      <MessageIcon
        width={24}
        height={24}
        style={{marginRight: theme.spaces.container}}
      />
    );
  } else {
    return null;
  }
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
            <Icon icon={icon} />
          </TouchableOpacity>
        ) : (
          <Icon icon={icon} />
        ))}
      <StyledTextInput {...props} ref={ref} />
    </>
  );
});
