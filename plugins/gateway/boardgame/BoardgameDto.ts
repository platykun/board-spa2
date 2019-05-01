/**
 * ボードゲーム情報用のDtoクラス
 */
export class BoardgameDto {
  constructor(
    public name: string,
  ) {
    this.records = [];
  }

  public records: Object;
}
