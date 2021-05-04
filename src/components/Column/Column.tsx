import {useNavigation} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {renameColumn} from '../../state/ducks/columns/columnsSlice';
import {COLUMN_SCREEN} from '../../navigation/constants';
import {Input} from '../../ui';
import {IColumn} from '../../interfaces/IColumn';
import styled from 'styled-components/native';

interface ColumnProps {
  column: IColumn;
}

export const Column: React.FC<ColumnProps> = ({column}) => {
  const [isRenaming, setIsRenaming] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [columnName, setColumnName] = useState(column.title);
  const inputRef = useRef<TextInput>();

  return (
    <ColumnBox
      onLongPress={() => {
        setIsRenaming(true);
        inputRef.current?.focus();
      }}
      onPress={() => navigation.navigate(COLUMN_SCREEN, column)}>
      <Input
        ref={inputRef}
        value={columnName}
        onChangeText={text => setColumnName(text)}
        editable={isRenaming}
        borderRadius={4}
        isBold
        autoFocus={isRenaming}
        onEndEditing={() => {
          dispatch(
            renameColumn({
              columnId: column.id,
              title: columnName,
            }),
          );
          setIsRenaming(false);
        }}
      />
    </ColumnBox>
  );
};

const ColumnBox = styled.TouchableOpacity`
  margin-bottom: ${({theme}) => theme.spaces.small};
`;
