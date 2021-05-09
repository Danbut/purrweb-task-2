export interface IPrayer {
  readonly id: string;
  readonly title: string;
  readonly isChecked: boolean;
  readonly columnId: string;
  readonly description: string;
  readonly commentsIds: string[];
}
