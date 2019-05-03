import f from 'firebase'
import DocumentSnapshot = f.firestore.DocumentSnapshot;
/**
 * 記録用のDtoクラス
 */

export class RecordDto {
  constructor(
    public boardGameSnapshot: DocumentSnapshot,
    public boardGameName: string,
    public userSnapshot: DocumentSnapshot,
    public userId: string,
    public userName: string,
    public comment: string,
    public star: string,
    public createAt: Date
  ) {
  }
}
