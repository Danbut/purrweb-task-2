import {IComment} from '../interfaces/IComment';

interface GetCommentResponse {
  id: number;
  body: string;
  created: string;
  prayerId: number | null;
  userId: number;
}

export const getCommentResponseTransformer = (data: GetCommentResponse) =>
  ({
    id: data.id.toString(),
    text: data.body,
    userId: data.userId.toString(),
    createdAt: data.created,
    prayerId: data.prayerId?.toString(),
  } as IComment);
