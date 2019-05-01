import {RecordDto} from "~/plugins/gateway/record/RecordDto";
import FirestoreCollections from "~/plugins/firestoreCollections";

export const addRecord = (recordDto: RecordDto) => {
  const records = FirestoreCollections.records()
  records.add({
    boardGame: {
      ref: recordDto.boardGameSnapshot.ref,
      name: recordDto.boardGameName
    },
    user: {
      ref:recordDto.userSnapshot.ref,
      name: recordDto.userName
    },
    star: recordDto.star,
    comment: recordDto.comment,
    createAt: recordDto.createAt
  })
  }
