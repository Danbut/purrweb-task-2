import {IComment} from '../interfaces/IComment';

interface AddCommentResponse {
  body: string;
  card: {
    id: number;
    title: string;
    description: string;
    checked: boolean;
    columnId: string;
    commentsIds: number[];
  };
  user: {
    id: number;
    email: string;
    name: string;
    token: string;
  };
  id: number;
  created: string;
  prayerId: number;
  userId: number;
}

export const addCommentResponseTransformer = (data: AddCommentResponse) =>
  ({
    id: data.id.toString(),
    text: data.body,
    userId: data.userId.toString(),
    createdAt: data.created,
    prayerId: data.prayerId?.toString(),
  } as IComment);
