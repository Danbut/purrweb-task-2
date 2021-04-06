import {IPrayer} from './IPrayer';

export class Prayer implements IPrayer {
  id: string;
  title: string;
  checked: boolean;

  constructor(id: string, title: string, checked: boolean) {
    this.id = id;
    this.title = title;
    this.checked = checked;
  }
}
