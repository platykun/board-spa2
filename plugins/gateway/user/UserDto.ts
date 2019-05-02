/**
 * ユーザ情報用のDtoクラス
 */
export class UserDto {
  constructor(
    public email: string,
    public name: string,
    public image: string,
    public id: string
  ) {
    this.records = [];
  }

  public records: Object;
}
