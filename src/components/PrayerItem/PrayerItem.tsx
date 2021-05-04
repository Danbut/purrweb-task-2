import {useNavigation} from '@react-navigation/core';
import React, {useContext, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled, {ThemeContext} from 'styled-components/native';
import {IPrayer} from '../../interfaces/IPrayer';
import {PRAYER_DETAILS_SCREEN} from '../../navigation/constants';
import {selectCommentsCountByPrayerId} from '../../state/ducks/comments/commentsSlice';
import {
  editPrayerTitle,
  setPrayerIsChecked,
} from '../../state/ducks/prayers/prayersSlice';
import {useAppDispatch, useAppSelector} from '../../state/hooks';
import {RootState} from '../../state/store';
import {Checkbox, Input, Mark, MessageIcon, PrayerIcon} from '../../ui';
import {UserIcon} from '../../ui';

interface PrayerItemProps {
  prayer: IPrayer;
}

export const PrayerItem: React.FC<PrayerItemProps> = ({prayer}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const commentsCount = useAppSelector((state: RootState) =>
    selectCommentsCountByPrayerId(state, prayer.id),
  );
  const [title, setTitle] = useState(prayer?.title);
  const inputRef = useRef<TextInput>();

  const openDetails = () => {
    navigation.navigate(PRAYER_DETAILS_SCREEN, prayer);
  };

  const [isChecked, setIsChecked] = useState(prayer.isChecked);

  const theme = useContext(ThemeContext);

  return (
    <PrayerBox
      onPress={openDetails}
      onLongPress={() => {
        setIsRenaming(true);
        inputRef.current?.focus();
      }}>
      <Mark />
      <Checkbox
        value={isChecked}
        onPress={() => {
          dispatch(setPrayerIsChecked({id: prayer.id, isChecked: !isChecked}));
          setIsChecked(!isChecked);
        }}></Checkbox>

      <Input
        style={{
          fontSize: theme.size.primary, //TODO: pass styled input?
          color: theme.colors.text.primary,
          marginRight: theme.spaces.small,
          flex: 0.5,
          textDecorationLine: isChecked ? 'line-through' : 'none',
        }}
        ref={inputRef}
        value={title}
        onChangeText={text => setTitle(text)}
        editable={isRenaming}
        withBorder={false}
        autoFocus={isRenaming}
        padding={0}
        onEndEditing={() => {
          dispatch(
            editPrayerTitle({
              id: prayer.id,
              title,
            }),
          );
          setIsRenaming(false);
        }}
      />

      <UserIcon width={20} height={17} />
      <PrayerSmallText>3</PrayerSmallText>
      <PrayerIcon width={21} height={18} />
      <PrayerSmallText>127</PrayerSmallText>
      {commentsCount > 0 ? (
        <>
          <MessageIcon width={21} height={18} color={theme.colors.primary} />
          <PrayerSmallText>{commentsCount}</PrayerSmallText>
        </>
      ) : (
        <></>
      )}
    </PrayerBox>
  );
};

const PrayerBox = styled(TouchableOpacity)`
  flex-direction: row;
  padding-vertical: ${({theme}) => theme.spaces.default};
  align-items: center;
`;

const PrayerSmallText = styled.Text`
  font-size: ${({theme}) => theme.size.secondary};
  color: ${({theme}) => theme.colors.text.primary};
  margin-right: ${({theme}) => theme.spaces.small};
`;
