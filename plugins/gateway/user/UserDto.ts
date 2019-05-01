/**
 * ユーザ情報用のDtoクラス
 */
export class UserDto {
  constructor(
    public email: string,
    public name: string,
    public image: string,
  ) {
    this.records = [];
  }

  public records: Object;
}
