import {RecordDto} from "~/plugins/gateway/record/RecordDto";
import FirestoreCollections from "~/plugins/firestoreCollections";

export const addRecord = (recordDto: RecordDto) => {
  const records = FirestoreCollections.records()

  records.add({
    boardGame: {
      ref: recordDto.boardGameRef,
      name: recordDto.boardGameName
    },
    user: {
      ref:recordDto.userRef,
      name: recordDto.userName
    },
    star: recordDto.star,
    comment: recordDto.comment,
    createAt: recordDto.createAt
  })
  }
