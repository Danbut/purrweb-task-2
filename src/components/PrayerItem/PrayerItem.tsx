import {useNavigation} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {PRIMARY_COLOR, SMALL_SPACE, styles} from '../../assets';
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

  return (
    <TouchableOpacity
      style={styles.prayerItemContainer}
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
        style={[
          styles.cardText,
          {
            marginRight: SMALL_SPACE,
            flex: 0.5,
            textDecorationLine: isChecked ? 'line-through' : 'none',
          },
        ]}
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
      <Text style={[styles.cardSmallText, {marginRight: SMALL_SPACE}]}>3</Text>
      <PrayerIcon width={21} height={18} />
      <Text style={[styles.cardSmallText, {marginRight: SMALL_SPACE}]}>
        127
      </Text>
      {commentsCount > 0 ? (
        <>
          <MessageIcon width={21} height={18} color={PRIMARY_COLOR} />
          <Text style={styles.cardSmallText}>{commentsCount}</Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
