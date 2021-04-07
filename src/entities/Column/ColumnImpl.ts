import {IColumn} from './IColumn';

export class Column implements IColumn {
  id: string;
  title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
