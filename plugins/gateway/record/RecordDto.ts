/**
 * 記録用のDtoクラス
 */
export class RecordDto {
  constructor(
    public boardGameRef: any,
    public boardGameName: string,
    public userRef: any,
    public userName: string,
    public comment: string,
    public star: string,
    public createAt: Date
  ) {
  }
}
