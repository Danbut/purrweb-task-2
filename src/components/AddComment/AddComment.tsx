import React from 'react';
import {Input} from '../../ui';

interface AddCommentProps {}

export const AddComment: React.FC<AddCommentProps> = () => {
  return (
    <>
      <Input
        icon={'message'}
        placeholder="Add a comment..."
        withBorder={false}
      />
    </>
  );
};
