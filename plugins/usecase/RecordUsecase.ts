import {addRecord, findAllRecordData} from "~/plugins/gateway/record/RecordGateway";
import {RecordDto} from "~/plugins/gateway/record/RecordDto";

export class RecordUsecase {

  static record(recordDto: RecordDto) {
    return addRecord(recordDto);
  }

  static findAllDatas() {
    findAllRecordData();
  }

}
