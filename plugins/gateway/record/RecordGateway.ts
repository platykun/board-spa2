import f from "firebase";
import {RecordDto} from "~/plugins/gateway/record/RecordDto";
import FirestoreCollections from "~/plugins/firestoreCollections";
import CollectionReference = f.firestore.CollectionReference;

export const addRecord = (recordDto: RecordDto) => {
  const records: CollectionReference = FirestoreCollections.records()
  return records.add({
    boardGame: {
      ref: recordDto.boardGameSnapshot.ref,
      name: recordDto.boardGameName
    },
    user: {
      ref:recordDto.userSnapshot.ref,
      id: recordDto.userId,
      name: recordDto.userName
    },
    star: recordDto.star,
    comment: recordDto.comment,
    createAt: recordDto.createAt
  })
  }

export const findAllRecordData = () => {
  const recordCollections = FirestoreCollections.records();

  const recordRefList = [];

  recordCollections.get().then( querySnapshot => {
    querySnapshot.forEach(recordSnapshot => {
      // @ts-ignore
      recordRefList.push(recordSnapshot.data())
    })
  });
  console.log(recordRefList);
  console.log(recordRefList);
  return recordRefList
}
