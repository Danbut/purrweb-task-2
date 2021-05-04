import {IPrayer} from '../interfaces/IPrayer';

interface UpdatePrayerResponseTransformer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
}

export const updatePrayerResponseTransformer = (
  data: UpdatePrayerResponseTransformer,
) =>
  ({
    id: data.id.toString(),
    title: data.title,
    description: data.description,
    isChecked: data.checked,
    columnId: data.columnId.toString(),
    commentsIds: data.commentsIds.map(c => c.toString()),
  } as IPrayer);
