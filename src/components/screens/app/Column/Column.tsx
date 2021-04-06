import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IColumn} from '../../../../entities/Column';
import styles from '../../../assets/styles';
import {COLUMN_SCREEN} from '../../../navigation/constants';
import {Input} from '../../../ui/Input';

interface ColumnProps {
  column: IColumn;
}

export const Column: React.FC<ColumnProps> = ({column}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.column}
      onLongPress={() => setIsRenaming(true)}
      onPress={() => navigation.navigate(COLUMN_SCREEN, {id: column.id})}>
      <Input value={column.title} editable={isRenaming} borderRadius={4} bold />
    </TouchableOpacity>
  );
};
