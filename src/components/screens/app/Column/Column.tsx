import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IColumn} from '../../../../entities/Column';
import styles from '../../../assets/styles';
import {COLUMN_SCREEN} from '../../../navigation/constants';

interface ColumnProps {
  column: IColumn;
}

export const Column: React.FC<ColumnProps> = ({column}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);

  const navigation = useNavigation();

  return (
    // <TouchableOpacity
    //   onLongPress={() => setIsRenaming(true)}
    //   style={styles.column}
    //   onPress={() => navigation.navigate(COLUMN_SCREEN, {id: column.id})}>
    //   {isRenaming ? <Input></Input> : <Text>fss</Text>}
    // </TouchableOpacity>
    <TouchableOpacity style={styles.column}>
      <Text style={styles.title}>{column.title}</Text>
    </TouchableOpacity>
  );
};

/*
TODO:
    1) onPress
    2) Rename state
*/
